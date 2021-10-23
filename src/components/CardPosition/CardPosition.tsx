import { DCAPosition } from "../../types";
import { BsQuestionCircle, BsArrowRightShort } from "react-icons/bs";
import { formatToFixed, getTokenUri } from "../../utils/misc";

interface CardPositionProps {
  position: DCAPosition;
}

const CardPosition: React.FC<CardPositionProps> = ({ position }) => {
  const {tokenIn, tokenOut, balanceIn, balanceOut, amountDCA, lastDCA, intervalDCA} = position;

  return (
    <div className="bg-white shadow-md hover:bg-gray-100 border-2 border-red-300 rounded-md p-3 cursor-pointer">
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
          <div className="font-bold">4 ETH</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Claimable</div>  
          <div className="font-bold">{formatToFixed(balanceOut, tokenOut.decimals)} {tokenOut.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">DCA amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>  
          <div className="font-bold">{formatToFixed(amountDCA, tokenOut.decimals)} {tokenIn.symbol}</div>
        </div>
        <div className="py-1">
          <div className="text-sm">DCA interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>  
          <div className="font-bold">24 Hours</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Next DCA in</div>  
          <div className="font-bold">
            24:20:20
            {/* <span className="text-blue-600">Executing DCA</span> */}
            {/* <span className="text-red-500">Not enough fund</span> */}
          </div>
        </div>
      </div>
    </div>  
  );
};

export default CardPosition;