import { DCAPosition } from "../../types";
import { BsQuestionCircle, BsArrowRightShort } from "react-icons/bs";
import { formatDate, formatDurationHumanize, formatToFixed, getTokenUri } from "../../utils/misc";
import { useMemo } from "react";
import { BigNumber } from "ethers";
import ReactTooltip from 'react-tooltip';
import { TOOLTIP_DCA_AMOUNT, TOOLTIP_DCA_INTERVAL } from "../../constants";

interface CardPositionProps {
  position: DCAPosition;
}

const CardPosition: React.FC<CardPositionProps> = ({ position }) => {
  const {tokenIn, tokenOut, balanceIn, balanceOut, totalOut, amountDCA, lastDCA, intervalDCA} = position;

  const nextDCA = useMemo(() => {
    const timestamp = parseInt(lastDCA) + parseInt(intervalDCA);
    return timestamp;
  }, [lastDCA, intervalDCA]);

  const labelNextDCA = useMemo(() => {
    if (BigNumber.from(amountDCA).gt(BigNumber.from(balanceIn))) {
      return "Not enough fund";
    }
    
    const now = Math.floor(Date.now() / 1000)
    if (nextDCA < now) {
      return "Executing DCA";
    } else {
      return formatDate(nextDCA);
    }
  }, [nextDCA, balanceIn, amountDCA]);
  
  return (
    <div className="bg-white shadow-md hover:bg-gray-100 border-2 border-red-300 rounded-md p-3 cursor-pointer">
      <ReactTooltip effect="solid"/>
      <div className="flex py-1">
        <span className="font-bold font-sans text-lg">
          <img src={getTokenUri(tokenIn.id)} className="h-7 pb-1 pr-1 inline"/>{tokenIn.symbol}
          <BsArrowRightShort className="inline mx-2" size="22px"/> 
          <img src={getTokenUri(tokenOut.id)} className="h-7 pb-1 pr-1 inline"/>{tokenOut.symbol}
        </span>
      </div>
      <div className="grid grid-cols-3 font-mono mt-1">
        <div className="py-1">
          <div className="text-sm">Available Funds</div>
          <div className="font-bold">{formatToFixed(balanceIn, tokenIn.decimals)} {tokenIn.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Total bought</div>  
          <div className="font-bold">{formatToFixed(totalOut, tokenOut.decimals)} {tokenOut.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Claimable</div>  
          <div className="font-bold">{formatToFixed(balanceOut, tokenOut.decimals)} {tokenOut.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">DCA amount<BsQuestionCircle data-tip={TOOLTIP_DCA_AMOUNT} className="inline pl-1 pb-1" size="18px"/></div>  
          <div className="font-bold">{formatToFixed(amountDCA, tokenIn.decimals)} {tokenIn.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">DCA interval<BsQuestionCircle data-tip={TOOLTIP_DCA_INTERVAL} className="inline pl-1 pb-1" size="18px"/></div>  
          <div className="font-bold">{formatDurationHumanize(parseInt(intervalDCA))}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Next DCA at</div>  
          <div className="font-bold">
            {labelNextDCA}
          </div>
        </div>
      </div>
    </div>  
  );
};

export default CardPosition;