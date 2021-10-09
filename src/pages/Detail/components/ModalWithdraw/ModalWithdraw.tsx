import React, { useCallback } from "react";
import Modal from "../../../../components/Modal/Modal";

interface ModalWIthdrawProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: () => void
}

const ModalWIthdraw: React.FC<ModalWIthdrawProps> = ({ isOpen, onDismiss, onSubmit }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSubmit = useCallback(() => {
      onSubmit();
    }, [onSubmit]);
    
    return (
      <>
        <Modal title={"Withdraw deposit"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            <button onClick={handleSubmit}></button>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalWIthdraw;
