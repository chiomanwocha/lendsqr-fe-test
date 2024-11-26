import organization from "../../../assets/icons/side-bar/organization.svg";
import dropDown from "../../../assets/icons/side-bar/drop-down.svg";
import useSidebar from "../../../hooks/useSidebar";
import "./sidebar.scss";

const Sidebar = () => {
  const { sections, navigate } = useSidebar();

  return (
    <nav>
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
                className={list.id === "users" ? "active" : ""}
                onClick={() => (list.to ? navigate(list.to) : null)}
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
