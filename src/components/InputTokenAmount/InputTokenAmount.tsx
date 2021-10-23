import { Token } from "../../types";

interface ButtonProps {
  token: Token;
  placeholder?: string,
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTokenAmount: React.FC<ButtonProps> = ({ token, value, placeholder="0.0", onChange, children }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 p-3 rounded-2xl w-full font-mono">
      <div className="flex">
        <div className="shadow rounded-2xl bg-white px-3 py-2 flex items-center">
          <img src={token.imageUri} className="h-6 pr-2"/>
          <span className="text-lg">{token.symbol}</span>
        </div>
        <input className="bg-gray-100 px-2 ml-auto text-right text-xl w-1/2 focus:outline-none" placeholder={placeholder}
          value={value}
          onChange={e => onChange(e)}/>
      </div>
      {children}
    </div>
  );
};

export default InputTokenAmount;