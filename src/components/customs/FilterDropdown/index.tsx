/* eslint-disable react-hooks/exhaustive-deps */
import filterIcon from "../../../assets/icons/filter.svg";
import Input from "../Input";
import RenderIf from "../RenderIf";
import useFilterDropdown from "../../../hooks/useFilterDropdown";
import { filterDropdownProps } from "../../../types";
import "./filter.scss";

const FilterDropdown = ({
  isOpen,
  toggleDropdown,
  data,
  setPagination,
  details,
  setDetails,
}: filterDropdownProps) => {
  const {
    handleOnChange,
    organizations,
    statuses,
    handleFilter,
    tempDetails,
    handleReset,
  } = useFilterDropdown(
    data,
    details,
    setDetails,
    toggleDropdown,
    setPagination
  );

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
              value={tempDetails.orgName}
              name="orgName"
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
              value={tempDetails.username}
              onChange={handleOnChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input
              placeholder="Email"
              type="email"
              value={tempDetails.email}
              onChange={handleOnChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <Input
              placeholder="Date"
              type="date"
              value={tempDetails.createdAt ?? ""}
              onChange={handleOnChange}
              name="createdAt"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <Input
              placeholder="Phone Number"
              value=""
              onChange={handleOnChange}
              name="phone_number"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select value="" name="status">
              <option value="">All</option>
              {Array.from(statuses).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button
              className="reset-btn"
              onClick={handleReset}
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
