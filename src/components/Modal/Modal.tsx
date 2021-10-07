import React, { useCallback } from "react";
import { BsX } from "react-icons/bs";

interface ModalProps {
    title: string,
    isOpen: boolean;
    onDismiss: () => void,
}

const Modal: React.FC<ModalProps> = ({ isOpen, onDismiss, title, children }) => {

    const handleDismiss = useCallback(() => {
        onDismiss();
    }, [onDismiss]);
    
    return (
      <>
        {isOpen &&
          <div className="z-50 fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center" onClick={handleDismiss}>
              <div className="bg-white shadow-lg p-4 rounded-2xl w-1/3 mb-5" onClick={(e) => {e.stopPropagation()}}>
                  <div className="flex justify-between">
                      <span className="text-lg font-sans">{title}</span>
                      <BsX className="text-3xl cursor-pointer" onClick={handleDismiss}/>
                  </div>
                  <div className="mt-3">
                      {children}
                  </div>
              </div>
          </div>}
      </>
    );
};

// interface OverlayProps {
//     isOpen?: boolean;
// }

// const StyledOverlay = styled.div.attrs({
//     className: "z-2 items-center justify-center overflow-hidden top-0 bottom-0 left-0 right-0 fixed",
// })<OverlayProps>`
//     background-color: rgba(70, 70, 70, 0.5);
//     display: ${props => props.isOpen ? 'flex' : 'none' }
// `;

// const StyledModal = styled.div.attrs({
//     className: 'z-3 pa3 br4 bg-white w-80 w-50-gt-xs items-center justify-center flex flex-column'
// })``;

// const ModalHeader = styled.div.attrs({
//     className: 'w-100 flex justify-between items-center'
// })``;
// const ModalBody = styled.div.attrs({
//     className: 'w-100 tc pv3'
// })``
 
export default Modal;
