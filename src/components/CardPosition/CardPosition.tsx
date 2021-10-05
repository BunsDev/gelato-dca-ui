import { DCAPosition } from "../../types";
import { BsQuestionCircle, BsArrowRightShort } from "react-icons/bs";

interface CardPositionProps {
  position: DCAPosition;
}

const CardPosition: React.FC<CardPositionProps> = ({ position }) => {
  return (
    <div className="bg-white shadow-md hover:bg-gray-100 border-2 border-red-300 rounded-md p-3 cursor-pointer">
      <div className="grid grid-cols-3 font-mono">
        <div className="col-span-3 py-1 flex">
          <span className="font-bold font-sans text-lg">
            {position.tokenIn} <BsArrowRightShort className="inline" size="22px"/> {position.tokenOut}
          </span>
        </div>
        <div className="py-1">
          <div className="text-sm">Available Funds</div>
          <div className="font-bold">700 USDC</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Total bought</div>  
          <div className="font-bold">4 ETH</div>
        </div>
        <div className="py-1">
          <div className="text-sm">Claimable</div>  
          <div className="font-bold">0.1 ETH</div>
        </div>
        <div className="py-1">
          <div className="text-sm">DCA amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>  
          <div className="font-bold">100 USDC</div>
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