import "./sidebar.scss";
import { ReactComponent as Loans } from "../../../assets/icons/side-bar/loans.svg";
import { ReactComponent as Dashboard } from "../../../assets/icons/side-bar/dashboard.svg";
import { ReactComponent as Users } from "../../../assets/icons/side-bar/users.svg";
import { ReactComponent as Guarantors } from "../../../assets/icons/side-bar/guarantors.svg";
import { ReactComponent as Models } from "../../../assets/icons/side-bar/models.svg";
import { ReactComponent as Savings } from "../../../assets/icons/side-bar/savings.svg";
import organization from "../../../assets/icons/side-bar/organization.svg";
import dropDown from "../../../assets/icons/side-bar/drop-down.svg";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const defaultMenu = [
    { id: "users", icon: <Users />, to: "/users" },
    { id: "guarantors", icon: <Guarantors fill="#7A8CB1" /> },
    { id: "loans", icon: <Loans fill="#7A8CB1" /> },
    { id: "models", icon: <Models fill="#7A8CB1" /> },
    { id: "savings", icon: <Savings fill="#7A8CB1" /> },
  ];
  const sections = [
    {
      name: "",
      children: [{ id: "dashboard", icon: <Dashboard fill="#7A8CB1" /> }],
    },
    {
      name: "CUSTOMERS",
      children: defaultMenu,
    },
  ];

  const navigate = useNavigate();
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
