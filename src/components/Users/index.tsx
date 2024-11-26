import { useEffect } from "react";
import Shell from "../customs/Shell";
import Card from "./Card";
import eye from "../../assets/icons/eye.svg";
import activate from "../../assets/icons/activate.svg";
import blacklist from "../../assets/icons/blacklist.svg";
import Table from "./Table";
import StatusPill from "./StatusPill";
import DropdownMenu from "../customs/Dropdown";
import Tr from "./Table/Tr";
import useUsers from "../../hooks/users/useUsers";
import "./users.scss";

const Users = () => {
  const {
    setLoading,
    cards,
    loading,
    thead,
    paginatedUsers,
    navigate,
    currentPage,
    itemsPerPage,
    totalPages,
  } = useUsers();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
        thead={thead}
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
