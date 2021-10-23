import React, { useCallback, useState } from "react";
import Button from "../../../../components/Button/Button";
import InputTokenAmount from "../../../../components/InputTokenAmount/InputTokenAmount";
import Modal from "../../../../components/Modal/Modal";
import { Token } from "../../../../types";
import { cleanInputNumber } from "../../../../utils/validation";

interface ModalWithdrawProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: (amount: string) => void,
    maxAmount: string,
    token: Token
}

const ModalWithdraw: React.FC<ModalWithdrawProps> = ({ isOpen, onDismiss, onSubmit, maxAmount, token }) => {
    const [amount, setAmount] = useState<string>("");

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSubmit = useCallback(() => {
      onSubmit(amount);
    }, [onSubmit]);
    
    const handleSetAmount = (value: string) => {
      setAmount(cleanInputNumber(value));
    }

    return (
      <>
        <Modal title={"Withdraw deposit"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            <div className="mx-auto py-5">
              <InputTokenAmount token={token} onChange={(e) => {handleSetAmount(e.target.value)}} value={amount}>
                <div className="mt-3 text-sm text-gray-500">
                  Withdrawable: {maxAmount} {token.symbol} <span className="text-red-400 cursor-pointer" onClick={() => handleSetAmount(maxAmount)}>
                    (MAX)
                  </span>
                </div>
              </InputTokenAmount>
            </div>
            <div className="text-center mt-2">
              <Button label="Withdraw" onClick={handleSubmit} isPrimary={false} isMono/>
            </div>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalWithdraw;
