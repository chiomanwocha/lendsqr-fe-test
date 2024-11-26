import { useState } from "react";
import { InputProps } from "../../../types";
import RenderIf from "../RenderIf";
import "./input.scss";

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
          onClick={() => setShowPassword((prev) => !prev)}
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
