import React, { useCallback } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import { Token } from "../../../../types";

interface ModalExitProps {
    isOpen: boolean,
    onDismiss: () => void,
    onSubmit: () => void,
    tokenIn: Token,
    tokenOut: Token,
    amountIn: string,
    amountOut: string
}

const ModalExit: React.FC<ModalExitProps> = ({ isOpen, onDismiss, onSubmit, tokenIn, tokenOut, amountIn, amountOut }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);

    const handleSubmit = useCallback(() => {
      onSubmit();
    }, [onSubmit]);
    
    return (
      <>
        <Modal title={"Exit DCA Position"} isOpen={isOpen} onDismiss={handleDismiss}>
          <div className="border-t border-gray-300 pt-2">
            <div className="text-4xl mx-auto pt-5 font-bold text-center">
              {amountOut} <img src={tokenOut.imageUri} className="h-9 pb-1 px-1 inline"/>
            </div>
            <div className="text-center font-bold text-4xl py-2">&</div>
            <div className="text-4xl mx-auto pb-5 font-bold text-center">
              {amountIn} <img src={tokenIn.imageUri} className="h-9 pb-1 px-1 inline"/>
            </div>
            <div className="text-center mt-2">
              <Button label="Exit" onClick={handleSubmit} isPrimary={false} isMono/>
            </div>
          </div>
        </Modal>
      </>
    );
};
 
export default ModalExit;
