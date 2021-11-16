import { BigNumber } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import React, { useCallback, useState } from "react";
import Button from "../../../../components/Button/Button";
import InputTokenAmount from "../../../../components/InputTokenAmount/InputTokenAmount";
import Modal from "../../../../components/Modal/Modal";
import { Token } from "../../../../types";
import { formatToFixed } from "../../../../utils/misc";
import { cleanInputNumber } from "../../../../utils/validation";
import Toggle from 'react-toggle';
import useEthereum from "../../../../hooks/useEthereum";
import { WMATIC_ADDRESS } from "../../../../constants/address";
import { MATIC_TOKEN } from "../../../../constants/tokens";

interface ModalDepositProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: (amount: BigNumber, useETH: boolean) => void,
    maxAmount: string,
    token: Token
}

const ModalDeposit: React.FC<ModalDepositProps> = ({ isOpen, onDismiss, onSubmit, maxAmount, token }) => {
    const { ethBalance } = useEthereum()
    const [useNative, setUseNative] = useState(false)
    const isNativeToken = token.id === WMATIC_ADDRESS

    const [amount, setAmount] = useState<string>("");

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSubmit = useCallback(() => {
      onSubmit(parseUnits(amount, token.decimals), useNative);
    }, [onSubmit, amount, token.decimals, useNative]);
    
    const handleSetAmount = (value: string) => {
      setAmount(cleanInputNumber(value));
    }

    const toggleUseNative = () => {
      setUseNative((oldValue) => !oldValue);
    }

    return (
      <>
        <Modal title={"Deposit funds"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            <div className="mx-auto pt-5 pb-3">
              {useNative &&
                <InputTokenAmount token={MATIC_TOKEN} onChange={(e) => {handleSetAmount(e.target.value)}} value={amount}>
                  <div className="mt-3 text-sm text-gray-500">
                    Balance: {formatToFixed(ethBalance?.toString() ?? "0", MATIC_TOKEN.decimals)} {MATIC_TOKEN.symbol} <span className="text-red-400 cursor-pointer" 
                      onClick={() => handleSetAmount(formatToFixed(ethBalance?.toString() ?? "0", MATIC_TOKEN.decimals))}>
                      (MAX)
                    </span>
                  </div>
                </InputTokenAmount>}
              {!useNative &&
                <InputTokenAmount token={token} onChange={(e) => {handleSetAmount(e.target.value)}} value={amount}>
                  <div className="mt-3 text-sm text-gray-500">
                    Balance: {formatToFixed(maxAmount, token.decimals)} {token.symbol} <span className="text-red-400 cursor-pointer" 
                      onClick={() => handleSetAmount(formatToFixed(maxAmount, token.decimals))}>
                      (MAX)
                    </span>
                  </div>
                </InputTokenAmount>}
            </div>
            {isNativeToken &&
              <div className="flex">
                <div className="ml-auto flex">
                  <Toggle
                    id='cheese-status'
                    defaultChecked={useNative}
                    onChange={toggleUseNative} />
                  <label htmlFor='cheese-status' className="pl-2 cursor-pointer">Use MATIC</label>
                </div>
              </div>}
            <div className="text-center mt-5">
              <Button label="Deposit" onClick={handleSubmit} isPrimary={false} isMono/>
            </div>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalDeposit;
