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
import RenderIf from "../customs/RenderIf";
import Pagination from "./Table/Pagination";
import "./users.scss";

const Users = () => {
  const {
    cards,
    loading,
    thead,
    navigate,
    openDropdown,
    setOpenDropDown,
    users,
    pagination,
    setPagination,
    formatDate,
    details,
    setDetails,
  } = useUsers();

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
      <div className="header-pagination">
        <RenderIf condition={!loading}>
          <Pagination pagination={pagination} setPagination={setPagination} />
        </RenderIf>
      </div>
      <Table
        thead={thead}
        pagination={pagination}
        setPagination={setPagination}
        details={details}
        setDetails={setDetails}
        loading={loading}
        data={users}
      >
        {users?.map((item: any) => (
          <Tr
            key={item?.id}
            onClick={() => navigate(`/users/details/${item?.id}`)}
          >
            <td>{item?.orgName}</td>
            <td>{item?.userName}</td>
            <td>{item?.email}</td>
            <td>{item?.profile?.phoneNumber}</td>
            <td>{formatDate(item?.createdAt)}</td>
            <td>
              <StatusPill status={item?.status} />
            </td>
            <td
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <DropdownMenu
                isOpen={openDropdown === item?.id}
                toggleDropdown={() =>
                  setOpenDropDown(openDropdown === item?.id ? null : item?.id)
                }
                options={[
                  {
                    label: "View Details",
                    icon: eye,
                    onClick: () => navigate(`/users/details/${item?.id}`),
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
