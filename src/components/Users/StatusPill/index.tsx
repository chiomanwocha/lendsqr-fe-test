import { StatusPillProps } from "../../../types";
import "./statuspill.scss";

const StatusPill = ({ status }: StatusPillProps) => {
  return <div className={`status ${status.toLowerCase()}`}>{status}</div>;
};

export default StatusPill;
