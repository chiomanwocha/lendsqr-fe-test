/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import all from "../../assets/icons/users/all.svg";
import active from "../../assets/icons/users/active.svg";
import loans from "../../assets/icons/users/loans.svg";
import savings from "../../assets/icons/users/savings.svg";
import { fetchUsers } from "../../api/services";
import { UserDetails, UserParams } from "../../types";

const useUsers = () => {
  const initial = {
    orgName: "",
    username: "",
    email: "",
    createdAt: "",
  };
  const [details, setDetails] = useState<UserDetails>(initial);
  const [users, setUsers] = useState([]);

  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropDown] = useState(null);

  const fetchData = async (params: UserParams) => {
    setLoading(true);
    try {
      const data = await fetchUsers(params);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const assignRandomStatus = (users: any) => {
      return users.map((user: any) => ({
        ...user,
        status: getRandomStatus(),
      }));
    };

    const fetchData = async (params: UserParams) => {
      setLoading(true);
      try {
        const data = await fetchUsers(params);
        setUsers(assignRandomStatus(data));
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData({ ...pagination, details });
  }, [pagination, details]);

  const navigate = useNavigate();

  const cards = [
    {
      icon: all,
      title: "Users",
      value: "2,453",
    },
    {
      icon: active,
      title: "Active Users",
      value: "2,453",
    },
    {
      icon: loans,
      title: "Users with Loans",
      value: "12,453",
    },
    {
      icon: savings,
      title: "Users with Savings",
      value: "102,453",
    },
  ];

  const thead = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
    "",
  ];

  function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString);

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  }

  const statuses = ["inactive", "pending", "blacklisted", "active"];

  const getRandomStatus = (): string => {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  return {
    cards,
    loading,
    thead,
    navigate,
    openDropdown,
    setOpenDropDown,
    users,
    pagination,
    setPagination,
    fetchData,
    formatDate,
    getRandomStatus,
    details,
    setDetails,
    initial,
  };
};

export default useUsers;
