import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: (e?: any) => void;
  type?: "button" | "submit";
  isDisabled?: boolean;
}

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
