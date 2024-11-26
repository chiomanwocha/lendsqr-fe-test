import { useNavigate } from "react-router";
import { ReactComponent as Loans } from "../assets/icons/side-bar/loans.svg";
import { ReactComponent as Dashboard } from "../assets/icons/side-bar/dashboard.svg";
import { ReactComponent as Users } from "../assets/icons/side-bar/users.svg";
import { ReactComponent as Guarantors } from "../assets/icons/side-bar/guarantors.svg";
import { ReactComponent as Models } from "../assets/icons/side-bar/models.svg";
import { ReactComponent as Savings } from "../assets/icons/side-bar/savings.svg";

const useSidebar = () => {
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
    {
      name: "BUSINESS",
      children: defaultMenu,
    },
  ];

  const navigate = useNavigate();
  return { sections, navigate };
};

export default useSidebar;
