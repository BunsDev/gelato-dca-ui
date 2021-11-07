import { BigNumber } from "ethers/lib/ethers";
import { useMemo, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import Button from "../../components/Button/Button";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import InputTokenAmount from "../../components/InputTokenAmount/InputTokenAmount";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";
import SelectTokenPair from "../../components/SelectTokenPair/SelectTokenPair";
import { IntervalPeriod } from "../../constants/misc";
import { useTokenPairs } from "../../hooks/useTokenPairs";
import { TokenPair } from "../../types";
import { cleanInputNumber } from "../../utils/validation";

const Create = () => {
    const {tokenPairs} = useTokenPairs();
    const [tokenPair, setTokenPair] = useState<TokenPair>();
    const tokenIn = tokenPair?.token1;
    const tokenOut = tokenPair?.token2;
    
    // const [tokenOut, setTokenOut] = useState<Token>(tokenOuts[0]);
    // const [tokenIn, setTokenIn] = useState<Token>();
    const [funds, setFunds] = useState<string>("");
    const [dcaAmount, setDcaAmount] = useState<string>("");
    const [valueInterval, setValueInterval] = useState<string>("1");
    const [periodInterval, setPeriodInterval] = useState<IntervalPeriod>(IntervalPeriod.Hour);
    const maxBalance = "10000";

    const numOfDca = useMemo(() => {
      if (funds.length === 0 || dcaAmount.length === 0) {
        return "-";
      }

      return BigNumber.from(funds).div(BigNumber.from(dcaAmount)).toString();
    }, [funds, dcaAmount]);

    const isInputValid = useMemo(() => {
      if (funds.length === 0 || dcaAmount.length === 0 || !tokenPair || !periodInterval) {
        return false;
      }
      return true;
    }, [funds, tokenPair, dcaAmount, periodInterval])
    
    const confirmationText = useMemo(() => {
      if (!tokenPair) return "-";
      let text = `Depositing ${funds} ${tokenIn!.symbol}`;
      text += ` to buy ${dcaAmount} ${tokenOut!.symbol} worth of ${tokenIn!.symbol}`;

      let interval = "";
      if (valueInterval.length > 0 && valueInterval !== "1" && valueInterval !== "0") {
        interval += `${valueInterval} `;
      }
      if (periodInterval === IntervalPeriod.Hour) {
        interval += "hour";
      } else if (periodInterval === IntervalPeriod.Day) {
        interval += "day";
      } else if (periodInterval === IntervalPeriod.Week) {
        interval += "week";
      }
      if (valueInterval.length > 0 && valueInterval !== "1" && valueInterval !== "0") {
        interval += "s";
      }

      text += ` every ${interval}.`;
      return text;
    }, [funds, tokenPair, dcaAmount, valueInterval, periodInterval])

    const handleSelectTokenPair = (tokenPair: TokenPair) => {
      setTokenPair(tokenPair);
    }

    // const handleSelectTokenOut = (token: Token) => {
    //   setTokenOut(token);
    // }

    // const handleSelectTokenIn = (token: Token) => {
    //   setTokenIn(token);
    // }

    const handleSetFunds = (value: string) => {
      setFunds(cleanInputNumber(value));
    }

    const handleSetDcaAmount = (value: string) => {
      setDcaAmount(cleanInputNumber(value));
    }

    const handleSetValueInterval = (value: string) => {
      value = cleanInputNumber(value);
      value = value.replaceAll(",", "");
      value = value.replaceAll(".", "");
      if (value === "0") value = "";
      setValueInterval(value);
    }

    const handleSelectIntervalPeriod = (period: IntervalPeriod) => {
      setPeriodInterval(period);
    }

    const handleSetMaxBalance = () => {
      setFunds(maxBalance);
    }

    return (
      <div className="w-full flex">
          <div className="w-full sm:w-3/4 lg:w-1/2 mt-28 mx-auto relative">
            <ButtonBack label="Back to Positions overview" />
            <div className="bg-white rounded-lg p-4 font-mono mt-3">
              <div className="font-bold text-xl">
                Open DCA Position
              </div>
              <div className="flex mt-4 items-center">
                <div className="w-3/5">
                  <div className="text-md font-bold">DCA Pair</div>
                  <SelectTokenPair tokenPair={tokenPair} tokenPairs={tokenPairs} onSelect={handleSelectTokenPair}/>
                  {/* <SelectToken token={tokenOut} tokens={tokenOuts} onSelect={handleSelectTokenOut}/> */}
                </div>
                {/* <div className="w-2/5">
                  <div className="text-md font-bold">Token to Send</div>
                  <SelectToken token={tokenOut} tokens={tokenOuts} onSelect={handleSelectTokenOut}/>
                </div>
                <BsArrowRightShort className="mx-3" size="20px"/>
                <div className="w-2/5">
                  <div className="text-md font-bold">Token to Receive</div>
                  <SelectToken token={tokenIn} tokens={tokenIns} onSelect={handleSelectTokenIn}/>
                </div> */}
              </div>
              <div className="mt-5">
                <div className="text-md font-bold">Deposit Funds<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                <div className="mt-1 w-3/5">
                  <InputTokenAmount token={tokenIn} onChange={(e) => handleSetFunds(e.target.value)} value={funds}>
                    <div className="mt-3 text-sm text-gray-500">
                      {tokenIn && <>
                        Balance: {maxBalance} {tokenIn?.symbol} <span className="text-red-400 cursor-pointer" onClick={handleSetMaxBalance}>
                          (MAX)
                        </span>
                      </>}
                      {!tokenIn && <>
                        Balance: -
                      </>}
                    </div>
                  </InputTokenAmount>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-md font-bold">DCA Amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                <div className="mt-1 w-3/5">
                  <InputTokenAmount token={tokenOut} onChange={(e) => handleSetDcaAmount(e.target.value)} value={dcaAmount}>
                    <div className="mt-3 text-sm text-gray-500">
                      Estimated number of DCA: {numOfDca}
                    </div>
                  </InputTokenAmount>
                </div>
              </div>
              <div className="flex mt-5">
                <div>
                  <div className="text-md font-bold">
                    DCA Interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 border border-gray-200 mt-1 p-3 rounded-2xl">
                      <input className="bg-gray-100 px-2 text-xl w-14 text-center focus:outline-none" 
                        placeholder="1"
                        value={valueInterval}
                        onChange={(e) => handleSetValueInterval(e.target.value)}/>
                    </div>
                    <SelectPeriod onSelect={(period) => handleSelectIntervalPeriod(period)} period={periodInterval}/>
                  </div>
                </div>
              </div>
              {isInputValid && <div className="flex justify-center">
                  <div className="mt-10 w-3/4 text-center">
                    {confirmationText}
                  </div>
                </div>}
              <div className="mt-10 flex">
                <div className="w-2/5 mx-auto">
                  <Button label="Approve" onClick={() => {}} 
                    isPrimary isMono={false} isBold fullWidth padding="py-3"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Create;