import { RenderIfProps } from "../../../types";

const RenderIf = ({ condition, children, elseNode }: RenderIfProps) => {
  return <>{condition ? children : elseNode ?? null}</>;
};

export default RenderIf;
