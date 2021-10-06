import { BsArrowLeftShort } from "react-icons/bs";
import { useHistory } from "react-router-dom"

interface ButtonProps {
  label: string;
}

const ButtonBack: React.FC<ButtonProps> = ({ label }) => {
  const history = useHistory();

  return (
    <span className="cursor-pointer text-gray-600" onClick={history.goBack}>
      <BsArrowLeftShort className="inline" size="23px"/>{label}
    </span>
  );
};

export default ButtonBack;