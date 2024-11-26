import { UserDetails, Users } from "../types";
import { useState } from "react";

const useFilterDropdown = (
  data: Users,
  details: UserDetails,
  setDetails: React.Dispatch<React.SetStateAction<UserDetails>>,
  toggleDropdown: () => void,
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      limit: number;
    }>
  >
) => {
  const organizations = new Set(data.map((item) => item?.orgName));
  const statuses = ["inactive", "pending", "blacklisted", "active"];

  const [tempDetails, setTempDetails] = useState(details);

  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    setTempDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilter = () => {
    setPagination({ page: 1, limit: 10 });
    setDetails(tempDetails);
    toggleDropdown();
  };

  const handleReset = () => {
    toggleDropdown();
    setDetails({
      orgName: "",
      username: "",
      email: "",
      createdAt: "",
    });
    setPagination({ page: 1, limit: 10 });
    setTempDetails({
      orgName: "",
      username: "",
      email: "",
      createdAt: "",
    });
  };

  return {
    handleOnChange,
    organizations,
    statuses,
    handleFilter,
    tempDetails,
    setTempDetails,
    handleReset,
  };
};

export default useFilterDropdown;
