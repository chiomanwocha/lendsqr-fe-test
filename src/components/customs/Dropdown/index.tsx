import { useState } from "react";
import option from "../../../assets/icons/options.svg";
import RenderIf from "../RenderIf";

import "./dropdown.scss";

interface DropdownMenuProps {
  options: { label: string; icon: string; onClick: () => void }[];
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="menu-button" onClick={() => setOpen((prev) => !prev)}>
        <img src={option} alt="options icon" />
      </button>
      <RenderIf condition={open}>
        <div className="menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => {
                option.onClick();
                setOpen(false);
              }}
            >
              <span className="icon">
                <img src={option.icon} alt={`${option.label} icon`} />
              </span>
              <span className="label">{option.label}</span>
            </div>
          ))}
        </div>
      </RenderIf>
    </div>
  );
};

export default DropdownMenu;
