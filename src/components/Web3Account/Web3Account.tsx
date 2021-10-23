import { useState } from "react";
import useEthereum from "../../hooks/useEthereum";
import Button from "../Button/Button";
import Web3AccountModal from "./components/Web3AccountModal/Web3AccountModal";

const Web3Account = () => {
    const { web3Modal, loadWeb3Modal, logoutOfWeb3Modal, injectedProvider, accountAddress } = useEthereum()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex">
            {injectedProvider &&
              <div className="font-mono cursor-pointer border border-black rounded-xl px-2 flex items-center"
                onClick={openModal}>
                {accountAddress}
              </div>}
            <div>
                {web3Modal && !web3Modal.cachedProvider &&
                  <Button label="Connect" onClick={loadWeb3Modal} 
                    isPrimary={false} isMono fullWidth={false} 
                    padding="px-8 py-2"/>}
            </div>
            <Web3AccountModal 
                isOpen={isModalOpen} 
                onDismiss={closeModal}
                logoutOfWeb3Modal={logoutOfWeb3Modal}
                address={accountAddress} />
        </div>
    );
};

export default Web3Account;