import { TrProps } from "../../../types";

const Tr = ({
  onClick,
  children,
}: TrProps) => {
  return (
    <tr className="row" onClick={onClick}>
      {children}
    </tr>
  );
};

export default Tr;
