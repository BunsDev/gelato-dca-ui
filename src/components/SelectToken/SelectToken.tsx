import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Token } from "../../types";
import ModalTokens from "../ModalTokens/ModalTokens";

interface SelectTokenProps {
  token?: Token,
  tokens: Token[],
  onSelect: (token: Token) => void,
}

const SelectToken: React.FC<SelectTokenProps> = ({ token, tokens, onSelect }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
      <>
        <div className="border border-gray-300 rounded-full hover:bg-gray-200 px-4 py-2 mt-1 cursor-pointer flex items-center"
          onClick={() => setIsOpenModal(true)}>
          {token && <div className="flex items-center">
              <img src={token.imageUri} className="h-6 pr-2"/>
              <div className="text-lg">{token.symbol}</div>
            </div>}
          {!token && <div className="flex">
              <div className="text-lg">Select a token</div>
            </div>}
          <BsChevronDown className="ml-auto inline" size="18px"/>
        </div>
        <ModalTokens 
          isOpen={isOpenModal} 
          onDismiss={() => {setIsOpenModal(false)}} 
          onSelect={(token) => onSelect(token)}
          tokens={tokens}/>
      </>
    );
};

export default SelectToken;
