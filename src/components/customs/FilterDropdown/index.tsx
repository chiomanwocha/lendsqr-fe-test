import { useEffect, useState } from "react";
import filterIcon from "../../../assets/icons/filter.svg";
import data from "../../../mocks/mock_users_500.json";
import Input from "../Input";
import "./filter.scss";
import RenderIf from "../RenderIf";
import { useLocation, useNavigate } from "react-router";

const FilterDropdown = ({
  isOpen,
  toggleDropdown,
  pagination,
}: {
  isOpen: boolean;
  toggleDropdown: () => void;
  pagination: { currentPage: number; itemsPerPage: number };
}) => {
  const organizations = new Set(data.map((item) => item.organization));
  const status = new Set(data.map((item) => item.status));

  const { search } = useLocation(); // Extract the query string from the current URL
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

  useEffect(() => {
    setDetails({
      organization: organization_default ?? "",
      username: username ?? "",
      email: email ?? "",
      date: "",
      phone_number: phone_number ?? "",
      status: status_default ?? "",
    });
  }, [organization_default, username, email, phone_number, status_default]);

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

  return (
    <div className="filter-dropdown">
      <button className="filter-button" onClick={toggleDropdown}>
        <img src={filterIcon} alt="filter icon" />
      </button>
      <RenderIf condition={isOpen}>
        <div className="filter-form">
          <div className="form-group">
            <label>Organization</label>
            <select
              value={details.organization}
              name="organization"
              onChange={(e) => handleOnChange(e)}
            >
              <option value="">All</option>
              {Array.from(organizations).map((org) => (
                <option key={org}>{org}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Username</label>
            <Input
              placeholder="Username"
              value={details.username}
              onChange={(e) => handleOnChange(e)}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input
              placeholder="Email"
              type="email"
              value={details.email}
              onChange={(e) => handleOnChange(e)}
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <Input
              placeholder="Date"
              type="date"
              value={details.date ?? ""}
              onChange={(e) => handleOnChange(e)}
              name="date"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <Input
              placeholder="Phone Number"
              value={details.phone_number}
              onChange={(e) => handleOnChange(e)}
              name="phone_number"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              value={details.status}
              name="status"
              onChange={(e) => handleOnChange(e)}
            >
              <option value="">All</option>
              {Array.from(status).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button
              className="reset-btn"
              onClick={() => {
                setDetails(initial);
                navigate(
                  `/users?page=${pagination.currentPage}&per_page=${pagination.itemsPerPage}`
                );
                toggleDropdown();
              }}
            >
              Reset
            </button>
            <button className="filter-btn" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>
      </RenderIf>
    </div>
  );
};

export default FilterDropdown;
