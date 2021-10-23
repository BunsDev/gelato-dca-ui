import { useCallback } from "react";
import Button from "../../../Button/Button";
import Modal from "../../../Modal/Modal";

interface Web3AccountModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  logoutOfWeb3Modal: () => void;
  address: string;
}

const Web3AccountModal: React.FC<Web3AccountModalProps> = ({ isOpen, onDismiss, logoutOfWeb3Modal, address }) => {

  const handleDismiss = useCallback(() => {
      onDismiss();
  }, [onDismiss]);

  return (
      <Modal title={"Connected Account"} isOpen={isOpen} onDismiss={handleDismiss}>
        <div className="py-2 font-mono font-bold text-sm flex">
          <span className="mx-auto">{address}</span>
        </div>
        <div className="mt-5">
          <Button onClick={logoutOfWeb3Modal} label="Disconnect" />
        </div>
      </Modal>
  );
};

export default Web3AccountModal;