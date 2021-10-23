import React, { useCallback } from "react";
import { Token } from "../../types";
import Modal from "../Modal/Modal";

interface ModalTokensProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSelect: (token: Token) => void,
    tokens: Token[]
}

const ModalTokens: React.FC<ModalTokensProps> = ({ isOpen, onDismiss, onSelect, tokens }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSelect = useCallback((token: Token) => {
      onSelect(token);
      onDismiss();
    }, [onSelect, onDismiss]);
    
    return (
      <>
        <Modal title={"Select a token"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            {tokens.map((token) => {
              return (
                <div key={token.symbol} className="p-2 rounded-xl hover:bg-gray-200 cursor-pointer flex items-center"
                  onClick={() => handleSelect(token)}>
                  <img src={token.imageUri} className="h-6 pr-2"/>
                  <div className="text-lg">{token.symbol}</div>
                </div>
              );
            })}
          </div>
        </Modal>
      </>
    );
};
 
export default ModalTokens;
