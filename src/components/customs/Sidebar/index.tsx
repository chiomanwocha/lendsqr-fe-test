import organization from "../../../assets/icons/side-bar/organization.svg";
import dropDown from "../../../assets/icons/side-bar/drop-down.svg";
import close from "../../../assets/icons/close.svg";
import useSidebar from "../../../hooks/useSidebar";
import { ShellNavigationProps } from "../../../types";
import "./sidebar.scss";

const Sidebar = ({ setOpen }: ShellNavigationProps) => {
  const { sections, navigate } = useSidebar();

  return (
    <nav>
      <div
        className="close-container"
        role="button"
        onClick={() => setOpen(false)}
      >
        <img src={close} alt="close icon" className="close" />
      </div>
      <div>
        <div className="organization-switch">
          <div>
            <img src={organization} alt="organization icon" />
          </div>
          <p>Switch Organization</p>
          <div>
            <img src={dropDown} alt="dropDown icon" />
          </div>
        </div>
        {sections.map((section) => (
          <ul key={section.name}>
            <p>{section.name}</p>
            {section.children.map((list) => (
              <li
                key={list.id}
                className={
                  list.id === "users" &&
                  section.name.toLocaleLowerCase() === "customers"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  list.to && navigate(list.to);
                  setOpen(false);
                }}
              >
                <div>{list.icon}</div>
                <p>{list.id}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
