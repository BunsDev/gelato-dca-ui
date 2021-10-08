import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import SelectToken from "../../components/SelectToken/SelectToken";
import { tokenIns } from "../../constants/tokens";

const Create = () => {
    const tokenOut = tokenIns[0];

    return (
      <div className="w-full flex">
          <div className="w-full sm:w-3/4 lg:w-1/2 mt-28 mx-auto relative">
            <ButtonBack label="Back to Positions overview" />
            <div className="bg-white rounded-lg p-4 font-mono mt-3">
              <div className="font-bold text-xl">
                Open DCA Position
              </div>
              <div className="flex mt-4 items-center">
                <div className="w-2/5">
                  <div className="text-md font-bold">Token to Send</div>
                  <SelectToken token={tokenOut} />
                </div>
                <BsArrowRightShort className="mx-3" size="20px"/>
                <div className="w-2/5">
                  <div className="text-md font-bold">Token to Receive</div>
                  <SelectToken />
                </div>
              </div>
              <div className="mt-5">
                <div className="text-md font-bold">Deposit Funds<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                <div className="bg-gray-100 border border-gray-200 mt-1 p-3 rounded-2xl w-3/5">
                  <div className="flex">
                    <div className="shadow rounded-2xl bg-white cursor-pointer px-3 py-2 flex items-center">
                      <img src={tokenOut.imageUri} className="h-6 pr-2"/>
                      <span className="text-lg">{tokenOut.ticker}</span>
                    </div>
                    <input className="bg-gray-100 px-2 ml-auto text-right text-xl w-1/2" placeholder="0.0"/>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    Balance: 1,000 {tokenOut.ticker} <span className="text-red-400 cursor-pointer">(MAX)</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-md font-bold">DCA Amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                <div className="bg-gray-100 border border-gray-200 mt-1 p-3 rounded-2xl w-3/5">
                  <div className="flex">
                    <div className="shadow rounded-2xl bg-white cursor-pointer px-3 py-2 flex items-center">
                      <img src={tokenOut.imageUri} className="h-6 pr-2"/>
                      <span className="text-lg">{tokenOut.ticker}</span>
                    </div>
                    <input className="bg-gray-100 px-2 ml-auto text-right text-xl w-1/2" placeholder="0.0"/>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    Estimated number of DCA: 10
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <div>
                  <div className="text-md font-bold">
                    DCA Interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 border border-gray-200 mt-1 p-3 rounded-2xl">
                      <input className="bg-gray-100 px-2 text-xl w-14 text-center" type="number" placeholder="1" min="1" value="1"/>
                    </div>
                    <div className="mx-3 grid grid-cols-3">
                      <div className="flex items-center justify-center px-3 py-2 w-24 cursor-pointer rounded-l-2xl border-2 border-red-400">Hours</div>
                      <div className="flex items-center justify-center px-3 py-2 w-24 cursor-pointer border-t-2 border-b-2 border-gray-200">Days</div>
                      <div className="flex items-center justify-center px-3 py-2 w-24 cursor-pointer rounded-r-2xl border-2 border-gray-200">Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="my-10 w-3/4 text-center">
                  Depositing 10,000 {tokenOut.ticker} to buy 100 {tokenOut.ticker} worth of ETH every 20 hours.
                </div>
              </div>
              <div className="flex">
                <button className="bg-red-400 hover:bg-red-500 rounded-lg w-2/5 py-3 mx-auto font-mono font-bold text-white">
                  Approve
                </button> 
              </div>
            </div>
          </div>
      </div>
    );
};

export default Create;