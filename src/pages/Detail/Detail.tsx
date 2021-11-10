import { BsInfoCircle, BsQuestionCircle, BsArrowRightShort } from "react-icons/bs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import { DCAPosition } from "../../types";
import { formatDate, formatDurationHumanize, formatToFixed, getTokenUri } from "../../utils/misc";
import { useParams } from "react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import ModalClaim from "./components/ModalClaim/ModalClaim";
import ModalDeposit from "./components/ModalDeposit/ModalDeposit";
import ModalExit from "./components/ModalExit/ModalExit";
import ModalWithdraw from "./components/ModalWithdraw/ModalWithdraw";
import Button from "../../components/Button/Button";
import { getPosition } from "../../utils/graph";
import TableTransactions from "./components/TableTransactions/TableTransactions";
import { useDCA } from "../../hooks/useDCA";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContractTransaction } from "ethers";
import { WMATIC_ADDRESS } from "../../constants/address";

interface DetailParams {
  positionId: string
}

const Detail = () => {
  let { positionId } = useParams<DetailParams>();

  const [position, setPosition] = useState<DCAPosition | null>(null);
  const { exit, deposit, withdrawTokenIn, withdrawTokenOut } = useDCA(position);

  const [isOpenModalExit, setIsOpenModalExit] = useState<boolean>(false);
  const [isOpenModalWithdraw, setIsOpenModalWithdraw] = useState<boolean>(false);
  const [isOpenModalClaim, setIsOpenModalClaim] = useState<boolean>(false);
  const [isOpenModalDeposit, setIsOpenModalDeposit] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosition = async () => {
      const position = await getPosition(positionId);

      setPosition(position);
    }

    fetchPosition();
  }, [positionId]);

  const interval = useMemo(() => {
    if (!position) return "-";
    return `${formatDurationHumanize(parseInt(position.intervalDCA))}`
  }, [position]);

  const dcaAmount = useMemo(() => {
    if (!position) return "-";
    return `${formatToFixed(position.amountDCA, position.tokenIn.decimals)} ${position.tokenIn.symbol}`;
  }, [position]);

  const dcaLeft = useMemo(() => {
    if (!position) return "-";
    const times = BigNumber.from(position.balanceOut).div(BigNumber.from(position.amountDCA)).toString();
    return `${times} times`;
  }, [position]);

  const availableFund = useMemo(() => {
    if (!position) return "-";
    return `${formatToFixed(position.balanceIn, position.tokenIn.decimals)} ${position.tokenIn.symbol}`;
  }, [position]);

  const claimable = useMemo(() => {
    if (!position) return "-";
    return `${formatToFixed(position.balanceOut, position.tokenOut.decimals)} ${position.tokenOut.symbol}`;
  }, [position]);

  // const totalSpent = useMemo(() => {
  //   if (!position) return "-";
  //   const spent = BigNumber.from(position.totalIn).sub(BigNumber.from(position.balanceIn))
  //   return `${formatToFixed(spent.toString(), position.tokenIn.decimals)} ${position.tokenIn.symbol}`;
  // }, [position]);

  const totalBought = useMemo(() => {
    if (!position) return "-";
    return `${formatToFixed(position.totalOut, position.tokenOut.decimals)} ${position.tokenOut.symbol}`;
  }, [position]);

  const nextDCA = useMemo(() => {
    if (!position) return "-";
    const timestamp = parseInt(position.lastDCA) + parseInt(position.intervalDCA);
    return `${formatDate(timestamp)}`;
  }, [position]);

  const transactions = useMemo(() => {
    if (!position) return null;
    return position.transactions.slice().reverse();
  }, [position]);

  const handleTransaction = (tx?: ContractTransaction) => {
    if (tx) {
      toast.info('Transaction sent!', {
        position: "bottom-right",
      });
    } else {
      toast.error('Transaction cancelled', {
        position: "bottom-right",
      });
    }
  }

  const handleExit = useCallback(async () => {
    const tx = await exit();
    handleTransaction(tx);
  }, [exit]);

  const handleDeposit = useCallback(async (amount: BigNumber) => {
    const useETH = position?.tokenIn.id === WMATIC_ADDRESS; 
    const tx = await deposit(amount, useETH);
    handleTransaction(tx);
  }, [deposit, position]);

  const handleWithdrawTokenIn = useCallback(async (amount: BigNumber) => {
    const tx = await withdrawTokenIn(amount);
    handleTransaction(tx);
  }, [withdrawTokenIn]);

  const handleWithdrawTokenOut = useCallback(async () => {
    const tx = await withdrawTokenOut();
    handleTransaction(tx);
  }, [withdrawTokenOut]);

  return (
    <div className="w-full flex">
        <div className="w-full sm:w-3/4 lg:w-2/3 mt-28 mx-auto">
          <ButtonBack label="Back to Positions overview" />
          <div className="my-2 flex">
            <div className="py-3 px-1 font-bold text-2xl">
              {position && (
                <>
                  <img src={getTokenUri(position.tokenIn.id)} className="h-7 pb-1 pr-1 inline"/>{position.tokenIn.symbol}
                  <BsArrowRightShort className="inline pb-1 mx-1" size="28px"/> 
                  <img src={getTokenUri(position.tokenOut.id)} className="h-7 pb-1 pr-1 inline"/>{position.tokenOut.symbol}
                </>
              )}
              {!position && <span>...</span>}
            </div>
            <button className="hover:bg-red-300 border-2 border-red-400 rounded-lg px-3 py-1 my-2 mr-2 font-mono text-red-500 ml-auto"
              onClick={() => setIsOpenModalExit(true)}>
              Exit Position
            </button>
            <Button label="Add Fund" onClick={() => setIsOpenModalDeposit(true)} 
              isPrimary isMono fullWidth={false} padding="px-8 py-1 my-2"/>
          </div>
          <div className="grid grid-cols-7 gap-3 font-mono">
            <div className="bg-white rounded-lg p-4 col-span-4">
              <div className="grid grid-cols-2">
                <div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">DCA interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                    <div className="text-lg">
                      {interval}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">DCA amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                    <div className="text-lg">
                      {dcaAmount}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">Total bought</div>
                    <div className="text-lg">{totalBought}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">DCA left</div>
                    <div className="text-lg">{dcaLeft}<BsInfoCircle className="inline pl-1 pb-1" size="16px"/></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-md text-gray-500">Next DCA at</div>
                <div className="text-lg">{nextDCA}</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-lg p-4">
                <div className="text-lg">Available Funds</div>
                <div className="mt-3 flex justify-between">
                  <span className="text-2xl font-bold">{availableFund}</span>
                  <Button label="Withdraw" onClick={() => setIsOpenModalWithdraw(true)} 
                    isPrimary={false} isMono fullWidth={false} padding="px-3 py-1"/>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-3">
                <div className="text-lg">Claimable</div>
                <div className="mt-3 flex justify-between">
                  <span className="text-2xl font-bold">{claimable}</span>
                  <Button label="Claim" onClick={() => setIsOpenModalClaim(true)} 
                    isPrimary={false} isMono fullWidth={false} padding="px-3 py-1"/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mt-3 font-mono">
            <div className="text-lg">History</div>
            {position !== null && <TableTransactions transactions={transactions ?? []} position={position!}/>}
          </div>
        </div>
        {position && (
          <>
            <ModalExit isOpen={isOpenModalExit} onDismiss={() => setIsOpenModalExit(false)} onSubmit={handleExit} 
              tokenIn={position.tokenIn} 
              tokenOut={position.tokenOut} 
              amountIn={position.balanceIn} 
              amountOut={position.balanceOut}/>
            <ModalDeposit isOpen={isOpenModalDeposit} onDismiss={() => setIsOpenModalDeposit(false)} 
              onSubmit={(amount: BigNumber) => handleDeposit(amount)} 
              maxAmount={"10000"} token={position.tokenIn}/>
            <ModalWithdraw isOpen={isOpenModalWithdraw} onDismiss={() => setIsOpenModalWithdraw(false)} 
              onSubmit={(amount: BigNumber) => handleWithdrawTokenIn(amount)} 
              maxAmount={position.balanceIn} token={position.tokenIn}/>
            <ModalClaim isOpen={isOpenModalClaim} onDismiss={() => setIsOpenModalClaim(false)} onSubmit={handleWithdrawTokenOut}
              amount="1"
              token={position.tokenOut}/>
          </>
        )}
        <ToastContainer />
    </div>  
  );
};

export default Detail;