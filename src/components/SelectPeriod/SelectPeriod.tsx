import React from "react";
import { IntervalPeriod } from "../../constants/misc";

interface SelectPeriodProps {
  period: IntervalPeriod,
  onSelect: (period: IntervalPeriod) => void,
}

interface SelectButtonProps {
  label: string,
  selected: boolean,
  className?: string,
  onClick: () => void,
}

const SelectPeriod: React.FC<SelectPeriodProps> = ({ period, onSelect }) => {
    return (
      <>
        <div className="mx-3 grid grid-cols-3">
          <SelectButtonProps className="rounded-l-2xl" label="Hours" 
            onClick={() => onSelect(IntervalPeriod.Hour)} 
            selected={period === IntervalPeriod.Hour}/>
          <SelectButtonProps className="border-t-2" label="Days" 
            onClick={() => onSelect(IntervalPeriod.Day)} 
            selected={period === IntervalPeriod.Day}/>
          <SelectButtonProps className="rounded-r-2xl" label="Weeks" 
            onClick={() => onSelect(IntervalPeriod.Week)} 
            selected={period === IntervalPeriod.Week}/>
        </div>
      </>
    );
};

const SelectButtonProps: React.FC<SelectButtonProps> = ({ label, selected, onClick, className }) => {
  className += " flex items-center justify-center px-3 py-2 w-24 cursor-pointer border-2";
  className += ` ${selected ? "border-red-400" : "border-gray-200"}`;
    
  return <div className={className} onClick={onClick}>{label}</div>;
}

export default SelectPeriod;
