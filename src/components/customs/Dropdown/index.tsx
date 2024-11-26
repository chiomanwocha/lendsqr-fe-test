import option from "../../../assets/icons/options.svg";
import RenderIf from "../RenderIf";
import { DropdownMenuProps } from "../../../types";
import "./dropdown.scss";

const DropdownMenu = ({ isOpen, toggleDropdown, options }: DropdownMenuProps) => {

  return (
    <div className="dropdown">
      <button className="menu-button" onClick={toggleDropdown}>
        <img src={option} alt="options icon" />
      </button>
      <RenderIf condition={isOpen}>
        <div className="menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => {
                option.onClick();
                toggleDropdown()
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
