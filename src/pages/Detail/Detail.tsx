import { BsInfoCircle, BsQuestionCircle, BsArrowRightShort } from "react-icons/bs";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import UsdcLogo from "../../assets/usdc.png";
import EthLogo from "../../assets/eth.png";
import { PositionTx } from "../../types";
import { WEB3_DATA_TYPE } from "../../constants/web3";
import { getEtherscanUrl } from "../../utils/misc";

const Detail = () => {
  const transactions: PositionTx[] = [
    {
      action: "DCA 0.1 ETH with 100 USDC",
      timestamp: "2 minutes ago",
      txHash: "0xc4036389f...7d30"
    },
    {
      action: "DCA 0.1 ETH with 100 USDC",
      timestamp: "12 minutes ago",
      txHash: "0xc4036389f...6d54"
    },
    {
      action: "Claim 0.5 ETH",
      timestamp: "4 hours ago",
      txHash: "0xc4036389f...422c"
    },
    {
      action: "Add 500 USDC",
      timestamp: "5 hours ago",
      txHash: "0xc4036389f...420c"
    },
    {
      action: "Open position with 1,000 USDC",
      timestamp: "2 days ago",
      txHash: "0xc4036389f...7d30"
    },
  ];

  return (
    <div className="w-full flex">
        <div className="w-full sm:w-3/4 lg:w-2/3 mt-28 mx-auto">
          <ButtonBack label="Back to Positions overview" />
          <div className="my-2 flex">
            <div className="py-3 px-1 font-bold text-2xl">
              <img src={UsdcLogo} className="h-7 pb-1 pr-1 inline"/>USDC
              <BsArrowRightShort className="inline pb-1 mx-1" size="28px"/> 
              <img src={EthLogo} className="h-7 pb-1 pr-1 inline"/>ETH
            </div>
            <button className="hover:bg-red-300 border-2 border-red-400 rounded-lg px-3 py-1 my-2 mr-2 font-mono text-red-500 ml-auto">
              Exit Position
            </button>
            <button className="bg-red-400 hover:bg-red-500 rounded-lg px-8 py-1 my-2 font-mono text-white">
              Add Fund
            </button>
          </div>
          <div className="grid grid-cols-7 gap-3 font-mono">
            <div className="bg-white rounded-lg p-4 col-span-4">
              <div className="grid grid-cols-2">
                <div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">DCA interval<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                    <div className="text-lg">every 24 Hours</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">DCA amount<BsQuestionCircle className="inline pl-1 pb-1" size="18px"/></div>
                    <div className="text-lg">100 USDC</div>
                  </div>
                  <div className="">
                    <div className="text-md text-gray-500">DCA left</div>
                    <div className="text-lg">10 times<BsInfoCircle className="inline pl-1 pb-1" size="16px"/></div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">Total spent</div>
                    <div className="text-lg">350 USDC</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-md text-gray-500">Total bought</div>
                    <div className="text-lg">0.6 ETH</div>
                  </div>
                  <div className="">
                    <div className="text-md text-gray-500">Next DCA in</div>
                    <div className="text-lg">12:00:10</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white rounded-lg p-4">
                <div className="text-lg">Available Funds</div>
                <div className="mt-3 flex justify-between">
                  <span className="text-2xl font-bold">1,000 USDC</span>
                  <button className="bg-blue-400 hover:bg-blue-500 rounded-lg text-white px-3">Withdraw</button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-3">
                <div className="text-lg">Claimable</div>
                <div className="mt-3 flex justify-between">
                  <span className="text-2xl font-bold">0.1 ETH</span>
                  <button className="bg-blue-400 hover:bg-blue-500 rounded-lg text-white px-3">Claim</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 mt-3 font-mono">
            <div className="text-lg">History</div>
            <table className="table-auto w-full mt-3">
              <thead>
                <tr>
                  <th className="text-left">Action</th>
                  <th className="text-right">Time</th>
                  <th className="text-right">Tx Hash</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => {
                  return (
                    <tr>
                      <td>{tx.action}</td>
                      <td className="text-right">{tx.timestamp}</td>
                      <td className="text-right">
                        <a href={getEtherscanUrl(tx.txHash, WEB3_DATA_TYPE.Tx)} className="underline" target="_blank">
                          {tx.txHash}↗
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>  
  );
};

export default Detail;