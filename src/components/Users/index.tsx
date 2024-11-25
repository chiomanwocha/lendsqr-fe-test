import Shell from "../customs/Shell";
import Card from "./Card";
import all from "../../assets/icons/users/all.svg";
import active from "../../assets/icons/users/active.svg";
import loans from "../../assets/icons/users/loans.svg";
import savings from "../../assets/icons/users/savings.svg";
import eye from "../../assets/icons/eye.svg";
import activate from "../../assets/icons/activate.svg";
import blacklist from "../../assets/icons/blacklist.svg";
import Table, { Tr } from "./Table";
import StatusPill from "./StatusPill";
import { useLocation, useNavigate } from "react-router";
import DropdownMenu from "../customs/Dropdown";
import allUsers from "../../mocks/mock_users_500.json";
import { useEffect, useMemo, useState } from "react";

import "./users.scss";

const Users = () => {
  const { search } = useLocation(); // Extract the query string from the current URL
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
    return allUsers.filter((user) => {
      return (
        (!organization || user.organization.includes(organization)) &&
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        (!phone_number || user.phone.includes(phone_number)) &&
        (!status || user.status === status)
      );
    });
  }, [organization, username, email, phone_number, status]);

  console.log("filters", filters);

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
    return filters.slice(startIndex, endIndex); // Apply pagination on filtered users
  }, [filters, currentPage, itemsPerPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filters.length / itemsPerPage); // Total pages based on filtered results
  }, [filters, itemsPerPage]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

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

  return (
    <Shell>
      <h2>Users</h2>
      <div className="cards-container">
        {cards.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            loading={loading}
          />
        ))}
      </div>
      <Table
        thead={[
          "organization",
          "username",
          "email",
          "phone number",
          "date joined",
          "status",
          "",
        ]}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        loading={loading}
      >
        {paginatedUsers.map((item: any) => (
          <Tr
            key={item.id}
            onClick={() => navigate(`/users/details/${item.id}`)}
          >
            <td>{item.organization}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.date_joined}</td>
            <td>
              <StatusPill status={item.status} />
            </td>
            <td onClick={(e) => e.stopPropagation()}>
              <DropdownMenu
                options={[
                  {
                    label: "View Details",
                    icon: eye,
                    onClick: () => navigate(`/users/details/${item.id}`),
                  },
                  {
                    label: "Blacklist User",
                    icon: blacklist,
                    onClick: () => null,
                  },
                  {
                    label: "Activate User",
                    icon: activate,
                    onClick: () => null,
                  },
                ]}
              />
            </td>
          </Tr>
        ))}
      </Table>
    </Shell>
  );
};

export default Users;
