import React, { useCallback } from "react";
import { CHAIN_ID } from "../../constants";
import useEthereum from "../../hooks/useEthereum";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

interface ModalNetworkProps {
    isOpen: boolean,
}

const ModalNetwork: React.FC<ModalNetworkProps> = ({ isOpen }) => {
    const { switchChain } = useEthereum()

    const handleClick = () => {
      switchChain(CHAIN_ID.POLYGON);
    };
    
    return (
      <>
        <Modal title="" isOpen={isOpen}>
            <div className="text-xl mx-auto py-5 font-bold text-center">
              Network not supported
            </div>
            <div className="text-center mt-2">
              <Button label="Switch to Polygon" onClick={handleClick} isPrimary={false} isMono/>
            </div>
        </Modal>
      </>
    );
};
 
export default ModalNetwork;
