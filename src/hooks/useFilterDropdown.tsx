import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import data from "../mocks/mock_users_500.json";

const useFilterDropdown = (toggleDropdown: () => void) => {
  const organizations = new Set(data.map((item) => item.organization));
  const status = new Set(data.map((item) => item.status));

  const { search } = useLocation(); 
  const params = new URLSearchParams(search);
  const username = params.get("username");
  const email = params.get("email");
  const phone_number = params.get("phone_number");
  const status_default = params.get("status");
  const organization_default = params.get("organization");

  const initial = {
    organization: "",
    username: "",
    email: "",
    date: "",
    phone_number: "",
    status: "",
  };

  const [details, setDetails] = useState<{
    organization?: string;
    username: string;
    email: string;
    date?: string;
    phone_number: string;
    status?: string;
  }>(initial);

  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleFilter = () => {
    const copiedDetails = details;
    delete copiedDetails.date;

    const urlParams = Object.entries(
      Object.fromEntries(
        Object.entries(details).filter(([_, value]) => value !== "")
      )
    )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    if (urlParams) {
      navigate(`?page=1&per_page=10&${urlParams}`);
      toggleDropdown();
      setDetails(initial);
    }
  };

  return {
    organization_default,
    username,
    email,
    phone_number,
    status_default,
    details,
    handleOnChange,
    organizations,
    status,
    setDetails,
    initial,
    navigate,
    handleFilter
  };
};

export default useFilterDropdown;
