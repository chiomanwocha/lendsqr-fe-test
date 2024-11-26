import { ButtonProps } from "../../../types";
import "./button.scss";

const Button = ({
  text,
  onClick,
  type = "button",
  isDisabled,
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
