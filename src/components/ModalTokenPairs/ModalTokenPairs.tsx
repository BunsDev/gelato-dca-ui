import React, { useCallback } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TokenPair } from "../../types";
import { getTokenUri } from "../../utils/misc";
import Modal from "../Modal/Modal";

interface ModalTokenPairsProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSelect: (tokenPair: TokenPair) => void,
    tokenPairs: TokenPair[]
}

const ModalTokenPairs: React.FC<ModalTokenPairsProps> = ({ isOpen, onDismiss, onSelect, tokenPairs }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSelect = useCallback((tokenPair: TokenPair) => {
      onSelect(tokenPair);
      onDismiss();
    }, [onSelect, onDismiss]);
    
    return (
      <>
        <Modal title={"Select token pair to DCA"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            {tokenPairs.map((tokenPair) => {
              return (
                <div key={tokenPair.id} className="py-3 px-2 my-1 rounded-xl hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => handleSelect(tokenPair)}>
                  <img src={getTokenUri(tokenPair.token1.id)} className="h-6 pr-2"/>
                  <div className="text-lg">{tokenPair.token1.symbol}</div>
                  <BsArrowRightShort className="inline pb-1 mx-1" size="28px"/> 
                  <img src={getTokenUri(tokenPair.token2.id)} className="h-6 pr-2"/>
                  <div className="text-lg">{tokenPair.token2.symbol}</div>
                </div>
              );
            })}
          </div>
        </Modal>
      </>
    );
};
 
export default ModalTokenPairs;
