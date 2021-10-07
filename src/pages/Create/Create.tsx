import { BsArrowRightShort, BsChevronDown, BsQuestionCircle } from "react-icons/bs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import UsdcLogo from "../../assets/usdc.png";
import EthLogo from "../../assets/eth.png";

const Create = () => {
    return (
      <div className="w-full flex">
          <div className="w-full sm:w-3/4 lg:w-2/3 mt-28 mx-auto relative">
            <ButtonBack label="Back to Positions overview" />
            <div className="bg-white rounded-lg p-4 font-mono mt-3">
              <div className="font-bold text-xl">
                Open DCA Position
              </div>
              <div className="flex mt-4 items-center">
                <div className="w-1/4">
                  <div className="text-md">Token to Send</div>
                  <div className="border border-gray-300 rounded-full hover:bg-gray-200 px-4 py-2 mt-1 cursor-pointer flex items-center">
                    <img src={UsdcLogo} className="h-5 pr-3"/>
                    <div className="text-lg">USDC</div>
                    <BsChevronDown className="ml-auto inline" size="18px"/>
                  </div>
                </div>
                <BsArrowRightShort className="mx-3" size="20px"/>
                <div className="w-1/4">
                  <div className="text-md">Token to Receive</div>
                  <div className="border border-gray-300 rounded-full hover:bg-gray-200 px-4 py-2 mt-1 cursor-pointer flex items-center">
                    <img src={EthLogo} className="h-5 pr-3"/>
                    <div className="text-lg">ETH</div>
                    <BsChevronDown className="ml-auto inline" size="18px"/>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-md">Deposit Funds<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                <div className="text-xl mt-1">1,000 USDC</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <div>
                  <div className="text-md">DCA Amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                  <div className="text-xl mt-1">100 USDC</div>
                </div>
                <div>
                  <div className="text-md">DCA Interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                  <div className="text-xl mt-1">1 Hour</div>
                </div>
              </div>
              <div className="flex mt-8">
                <button className="bg-red-400 hover:bg-red-500 rounded-lg w-1/3 py-3 ml-auto font-mono font-bold text-white">
                  Approve
                </button> 
              </div>
            </div>
          </div>
      </div>
    );
};

export default Create;