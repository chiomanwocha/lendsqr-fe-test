import { DetailsProps } from "../../../../types";
import RenderIf from "../../../customs/RenderIf";
import "./header.scss";

const Header = ({ loading }: DetailsProps) => {
  return (
    <div className="container">
      <h2>User Details</h2>
      <div className="action-btns">
        <RenderIf condition={!loading}>
          <button className="blacklist">Blacklist User</button>
          <button className="activate">Activate User</button>
        </RenderIf>
      </div>
    </div>
  );
};

export default Header;
