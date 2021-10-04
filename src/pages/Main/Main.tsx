
const Main = () => {
    return (
      <div className="w-full flex h-screen">
          <div className="w-full sm:w-3/4 lg:w-2/3 m-auto">
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
            <div className="bg-white rounded-lg p-4 m-2 h-52 flex flex-col items-center justify-center">
                <span className="font-mono">
                  Your DCA positions will appear here.
                </span>
            </div>
          </div>
      </div>  
    );
};

export default Main;