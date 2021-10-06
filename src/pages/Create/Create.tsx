
import { BsArrowRightShort } from "react-icons/bs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

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
                <div>
                  <div className="text-md font-bold">Token to Send</div>
                  <div className="text-xl">USDC</div>
                </div>
                <BsArrowRightShort className="mx-3" size="20px"/>
                <div>
                  <div className="text-md font-bold">Token to Receive</div>
                  <div className="text-xl">ETH</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <div className="text-md font-bold">Initial Funds</div>
                  <div className="text-xl">1,000 USDC</div>
                </div>
                <div>
                  <div className="text-md font-bold">DCA Amount</div>
                  <div className="text-xl">100 USDC</div>
                </div>
                <div>
                  <div className="text-md font-bold">DCA Interval</div>
                  <div className="text-xl">1 Hour</div>
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