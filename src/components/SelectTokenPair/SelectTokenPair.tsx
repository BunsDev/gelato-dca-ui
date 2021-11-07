import React, { useState } from "react";
import { BsArrowRightShort, BsChevronDown } from "react-icons/bs";
import { TokenPair } from "../../types";
import { getTokenUri } from "../../utils/misc";
import ModalTokenPairs from "../ModalTokenPairs/ModalTokenPairs";

interface SelectTokenPairProps {
  tokenPair?: TokenPair,
  tokenPairs: TokenPair[],
  onSelect: (tokenPair: TokenPair) => void,
}

const SelectTokenPair: React.FC<SelectTokenPairProps> = ({ tokenPair, tokenPairs, onSelect }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
      <>
        <div className="border border-gray-300 rounded-full hover:bg-gray-200 px-4 py-2 mt-1 cursor-pointer flex items-center"
          onClick={() => setIsOpenModal(true)}>
          {tokenPair && <div className="flex items-center">
              <img src={getTokenUri(tokenPair.token1.id)} className="h-6 pr-2"/>
              <div className="text-lg">{tokenPair.token1.symbol}</div>
              <BsArrowRightShort className="inline pb-1 mx-1" size="28px"/> 
              <img src={getTokenUri(tokenPair.token2.id)} className="h-6 pr-2"/>
              <div className="text-lg">{tokenPair.token2.symbol}</div>
            </div>}
          {!tokenPair && <div className="flex">
              <div className="text-lg">Select DCA pair</div>
            </div>}
          <BsChevronDown className="ml-auto inline" size="18px"/>
        </div>
        <ModalTokenPairs 
          isOpen={isOpenModal} 
          onDismiss={() => {setIsOpenModal(false)}} 
          onSelect={(tokenPair) => onSelect(tokenPair)}
          tokenPairs={tokenPairs}/>
      </>
    );
};

export default SelectTokenPair;
