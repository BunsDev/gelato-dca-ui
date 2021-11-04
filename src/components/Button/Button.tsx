import { useMemo } from "react";

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
  isBold?: boolean;
  isMono?: boolean;
  fullWidth?: boolean;
  padding?: string; //unchecked
  fontSize?: string; //unchecked
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isPrimary=true, isBold=false, isMono=true, fullWidth=true, padding, fontSize, onClick }) => {
  
  const className = useMemo(() => {
    let classes = "rounded-lg text-white";
    if (isPrimary) {
      classes += " bg-red-400 hover:bg-red-500"
    } else {
      classes += " bg-blue-400 hover:bg-blue-500"
    }

    if (isBold) {
      classes += " font-bold";
    }

    if (isMono) {
      classes += " font-mono";
    }

    if (fullWidth) {
      classes += " w-full";
    }

    if (padding && padding.length > 0) {
      classes += ` ${padding}`;
    } else {
      classes += " py-3";
    }

    classes += ` ${padding} ${fontSize}`;

    return classes;
  }, [isPrimary, isBold, isMono, fontSize, fullWidth, padding]);
  
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button> 
  );
};

export default Button;