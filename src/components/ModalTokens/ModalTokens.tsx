import React, { useCallback } from "react";
import Modal from "../Modal/Modal";

interface ModalTokensProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSelect: (token: string) => void
}

const ModalTokens: React.FC<ModalTokensProps> = ({ isOpen, onDismiss, onSelect }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);
    
    return (
      <>
        <Modal title={"Select a token"} isOpen={isOpen} onDismiss={handleDismiss}>
          TOKENS
          <button onClick={() => onSelect("asdf")}>USDC</button>
        </Modal>
      </>
    );
};
 
export default ModalTokens;
