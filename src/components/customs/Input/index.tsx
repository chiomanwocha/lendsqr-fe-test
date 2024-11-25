import { useState } from "react";
import "./input.css";
import RenderIf from "../RenderIf";

interface InputProps {
  placeholder: string;
  type?: "email" | "text" | "password" | "number" | "date";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const today = new Date();

  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        max={type === "date" ? today.toISOString().split("T")[0] : undefined}
        type={type === "password" && showPassword ? "text" : type}
        value={value}
        autoComplete="off"
        onChange={onChange}
        name={name}
      />
      <RenderIf condition={type === "password"}>
        <span
          className="toggle-visibility"
          onClick={() => setShowPassword(!showPassword)}
          role="button"
        >
          <RenderIf condition={showPassword} elseNode="SHOW">
            HIDE
          </RenderIf>
        </span>
      </RenderIf>
    </div>
  );
};

export default Input;
