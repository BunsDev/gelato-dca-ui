import CardPosition from "../../components/CardPosition/CardPosition";
import { DCAPosition } from "../../types";

const Main = () => {
    const positions: DCAPosition[] = [
      {
        positionId: "1",
        tokenIn: "USDC",
        tokenOut: "ETH",
        balanceIn: "1000",
        balanceOut: "0.1",
        amountDCA: "100",
        intervalDCA: "600",
        lastDCA: "0",
        maxSlippage: "10",
      },
    ]

    return (
      <div className="w-full flex">
          <div className="w-full sm:w-3/4 lg:w-2/3 mt-28 mx-auto">
            <div className="grid grid-cols-3">
              <div className="col-span-2 bg-white rounded-lg p-4 m-2">
                <a className="font-bold" href="#">
                  Learn about Dollar-Cost-Averaging using Dango ↗
                </a>
              </div>
                <button className="bg-red-400 hover:bg-red-500 rounded-lg p-4 m-2 font-mono font-bold text-white">
                  + New Position
                </button>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 m-2 flex flex-col">
                {positions.length == 0 && 
                  <div className="flex flex-col h-52">
                    <span className="font-mono self-center my-auto">
                      Your DCA positions will appear here.
                    </span>
                  </div>}
                {positions.length > 0 && 
                  <span className="font-mono py-2">
                    Your DCA positions:
                  </span>}
                {positions.map((position) => {
                  return (
                    <div className="mb-5">
                      <CardPosition position={position} />
                    </div>
                  );
                })}
            </div>
          </div>
      </div>  
    );
};

export default Main;