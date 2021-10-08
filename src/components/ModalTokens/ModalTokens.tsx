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
          {tokens.map((token) => {
            return (
              <div key={token.ticker}>
                <button onClick={() => handleSelect(token)}>{token.ticker}</button>
              </div>
            );
          })}
        </Modal>
      </>
    );
};
 
export default ModalTokens;
