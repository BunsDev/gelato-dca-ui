import { BigNumber } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import React, { useCallback, useMemo, useState } from "react";
import Button from "../../../../components/Button/Button";
import InputTokenAmount from "../../../../components/InputTokenAmount/InputTokenAmount";
import Modal from "../../../../components/Modal/Modal";
import { Token } from "../../../../types";
import { formatToFixed } from "../../../../utils/misc";
import { cleanInputNumber } from "../../../../utils/validation";
import Toggle from 'react-toggle';
import useEthereum from "../../../../hooks/useEthereum";
import { DCA_CORE_ADDRESS, WMATIC_ADDRESS } from "../../../../constants/address";
import { MATIC_TOKEN } from "../../../../constants/tokens";
import { useAllowance } from "../../../../hooks/useAllowance";

enum DepositFormValidation {
  INPUT_FUND,
  NOT_ENOUGH_FUND,
  APPROVE_FUND,
  DEPOSIT
}

interface ModalDepositProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: (amount: BigNumber, useETH: boolean) => void,
    maxAmount: string,
    token: Token
}

const ModalDeposit: React.FC<ModalDepositProps> = ({ isOpen, onDismiss, onSubmit, maxAmount, token }) => {
    const { ethBalance } = useEthereum()
    const { allowance, approve, refetchAllowance } = useAllowance(token.id, DCA_CORE_ADDRESS)
    const [useNative, setUseNative] = useState(false)
    const isNativeToken = token.id === WMATIC_ADDRESS

    const [amount, setAmount] = useState<string>("");

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSetAmount = (value: string) => {
      setAmount(cleanInputNumber(value));
    }

    const toggleUseNative = () => {
      setUseNative((oldValue) => !oldValue);
    }

    const formState = useMemo(() => {
      if (amount.length === 0 || amount === "0") return DepositFormValidation.INPUT_FUND;

      if (useNative) {
        if (!ethBalance) return DepositFormValidation.NOT_ENOUGH_FUND;
        if (parseUnits(amount, token.decimals).gt(ethBalance)) return DepositFormValidation.NOT_ENOUGH_FUND;
      } else {
        if (parseUnits(amount, token.decimals).gt(maxAmount)) return DepositFormValidation.NOT_ENOUGH_FUND;
        if (parseUnits(amount, token.decimals).gt(allowance)) return DepositFormValidation.APPROVE_FUND;
      }
      return DepositFormValidation.DEPOSIT;
    }, [amount, ethBalance, maxAmount, allowance, token.decimals, useNative]);

    const btnLabel = useMemo(() => {
      let label = "-";
      switch (formState) {
        case DepositFormValidation.INPUT_FUND:
          label = "Input Fund Amount"
          break;
        case DepositFormValidation.NOT_ENOUGH_FUND:
          label = "Not Enough Balance"
          break;
        case DepositFormValidation.APPROVE_FUND:
          label = "Approve Fund"
          break;
        case DepositFormValidation.DEPOSIT:
          label = "Deposit"
          break;
        default:
          break;
      }
      return label;
    }, [formState]);

    const handleSubmit = useCallback(async () => {
      if (formState === DepositFormValidation.APPROVE_FUND) {
        await approve()
        refetchAllowance();
      } else if (formState === DepositFormValidation.DEPOSIT) {
        onSubmit(parseUnits(amount, token.decimals), useNative);
      }
    }, [formState, onSubmit, amount, token.decimals, useNative, approve, refetchAllowance]);

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
                    id='native-toggle'
                    defaultChecked={useNative}
                    onChange={toggleUseNative} />
                  <label htmlFor='native-toggle' className="pl-2 cursor-pointer">Use MATIC</label>
                </div>
              </div>}
            <div className="text-center mt-5">
              <Button isMono label={btnLabel} 
                onClick={handleSubmit} 
                isPrimary={false} 
                isDisabled={!(formState === DepositFormValidation.APPROVE_FUND || formState === DepositFormValidation.DEPOSIT)}/>
            </div>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalDeposit;
