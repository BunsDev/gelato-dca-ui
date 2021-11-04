import CardPosition from "../../components/CardPosition/CardPosition";
import { useHistory } from "react-router-dom";
import { GUIDEBOOK_URL } from "../../constants/endpoints";
import Button from "../../components/Button/Button";
import { usePositions } from "../../hooks/usePositions";
import useEthereum from "../../hooks/useEthereum";

const Main = () => {
    const history = useHistory();
    const { accountAddress } = useEthereum();
    const { positions, isLoading } = usePositions(accountAddress);

    const goToAdd = () => {
      history.push("/add");
    }

    const goToDetail = (positionId: string) => {
      history.push("/position/" + positionId);
    }

    return (
      <div className="w-full flex">
          <div className="w-full sm:w-3/4 lg:w-2/3 mt-28 mx-auto">
            <div className="grid grid-cols-3">
              <div className="col-span-2 bg-white rounded-lg p-4 m-2">
                <a className="font-bold underline" href={GUIDEBOOK_URL} target="_blank" rel="noreferrer">
                  Learn about Dollar-Cost-Averaging using Dango ↗
                </a>
              </div>
              <Button label="+ New Position" onClick={goToAdd} 
                  isPrimary isMono isBold fullWidth={false} padding="p-4 m-2"/>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 m-2 flex flex-col">
                {(positions.length === 0) && 
                  <div className="flex flex-col h-52">
                    <span className="font-mono self-center my-auto">
                      Your DCA positions will appear here.
                    </span>
                  </div>}
                {positions && positions.length > 0 && 
                  <span className="font-mono py-2 mb-1">
                    Your DCA positions:
                  </span>}
                {positions && positions.map((position) => {
                  return (
                    <div key={position.id} className="mb-5" onClick={() => goToDetail(position.id)}>
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