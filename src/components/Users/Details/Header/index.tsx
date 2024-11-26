import { DetailsProps } from "../../../../types";
import RenderIf from "../../../customs/RenderIf";
import "./header.scss";

const Header = ({ user, loading }: DetailsProps) => {
  return (
    <div className="container">
      <h2>User Details</h2>
      <div className="action-btns">
        <RenderIf condition={!loading}>
          <RenderIf condition={user.status === "active"}>
            <button className="blacklist">Blacklist User</button>
          </RenderIf>
          <RenderIf
            condition={["blacklisted", "pending", "inactive"].includes(
              user.status
            )}
          >
            <button className="activate">Activate User</button>
          </RenderIf>
        </RenderIf>
      </div>
    </div>
  );
};

export default Header;
