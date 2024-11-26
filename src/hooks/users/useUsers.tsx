import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import all from "../../assets/icons/users/all.svg";
import active from "../../assets/icons/users/active.svg";
import loans from "../../assets/icons/users/loans.svg";
import savings from "../../assets/icons/users/savings.svg";
import users from "../../mocks/mock_users_500.json";

const useUsers = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get("page");
  const perPage = params.get("per_page");
  const organization = params.get("organization");
  const username = params.get("username");
  const email = params.get("email");
  const phone_number = params.get("phone_number");
  const status = params.get("status");

  const [loading, setLoading] = useState(true);

  const filters = useMemo(() => {
    return users.filter((user) => {
      return (
        (!organization || user.organization.includes(organization)) &&
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        (!phone_number || user.phone.includes(phone_number)) &&
        (!status || user.status === status)
      );
    });
  }, [organization, username, email, phone_number, status]);

  const currentPage = useMemo(() => {
    return page ? Number(page) : 1;
  }, [page]);

  const itemsPerPage = useMemo(() => {
    return perPage ? Number(perPage) : 10;
  }, [perPage]);

  const navigate = useNavigate();

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filters.slice(startIndex, endIndex);
  }, [filters, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filters.length / itemsPerPage);
  }, [filters, itemsPerPage]);

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
  return {
    setLoading,
    cards,
    loading,
    thead,
    paginatedUsers,
    navigate,
    currentPage,
    itemsPerPage,
    totalPages,
  };
};

export default useUsers;
