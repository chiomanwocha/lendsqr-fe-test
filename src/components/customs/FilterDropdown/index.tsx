/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import filterIcon from "../../../assets/icons/filter.svg";
import Input from "../Input";
import RenderIf from "../RenderIf";
import useFilterDropdown from "../../../hooks/useFilterDropdown";
import { filterDropdownProps } from "../../../types";
import "./filter.scss";

const FilterDropdown = ({
  isOpen,
  toggleDropdown,
  pagination,
}: filterDropdownProps) => {
  const {
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
    handleFilter,
  } = useFilterDropdown(toggleDropdown);

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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input
              placeholder="Email"
              type="email"
              value={details.email}
              onChange={handleOnChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <Input
              placeholder="Date"
              type="date"
              value={details.date ?? ""}
              onChange={handleOnChange}
              name="date"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <Input
              placeholder="Phone Number"
              value={details.phone_number}
              onChange={handleOnChange}
              name="phone_number"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              value={details.status}
              name="status"
              onChange={handleOnChange}
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
