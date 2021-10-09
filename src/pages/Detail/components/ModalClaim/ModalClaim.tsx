import React, { useCallback } from "react";
import Modal from "../../../../components/Modal/Modal";

interface ModalClaimProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: () => void
}

const ModalClaim: React.FC<ModalClaimProps> = ({ isOpen, onDismiss, onSubmit }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSubmit = useCallback(() => {
      onSubmit();
    }, [onSubmit]);
    
    return (
      <>
        <Modal title={"Claim token"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            <button onClick={handleSubmit}></button>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalClaim;
