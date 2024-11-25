import "./statuspill.scss";

const StatusPill = ({ status }: { status: string }) => {
  return <div className={`status ${status.toLowerCase()}`}>{status}</div>;
};

export default StatusPill;
