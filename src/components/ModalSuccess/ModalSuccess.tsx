import React, { useCallback } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { BsCheckCircleFill } from "react-icons/bs";

interface ModalSuccessProps {
    isOpen: boolean,
    onDismiss: () => void,
    label: string,
    btnLabel: string,
    onClick: () => void,
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({ isOpen, onDismiss, label, btnLabel, onClick }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleClick = useCallback(() => {
      onClick();
      onDismiss();
    }, [onClick, onDismiss]);
    
    return (
      <>
        <Modal title="" isOpen={isOpen} onDismiss={handleDismiss}>
            <div className="flex px-auto">
              <div className="mx-auto">
                <BsCheckCircleFill size={"5em"} color="#6EE7B7" />
              </div>
            </div>
            <div className="text-xl mx-auto py-4 text-center">
              {label}
            </div>
            <div className="text-center mt-2">
              <Button label={btnLabel} onClick={handleClick} isPrimary={false} isMono/>
            </div>
        </Modal>
      </>
    );
};
 
export default ModalSuccess;
