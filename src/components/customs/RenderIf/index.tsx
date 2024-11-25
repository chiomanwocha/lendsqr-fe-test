import React from "react";

interface RenderIfProps {
  condition: boolean;
  children: string | React.ReactNode;
  elseNode?: string | React.ReactNode;
}

const RenderIf = ({ condition, children, elseNode }: RenderIfProps) => {
  return <>{condition ? children : elseNode ?? null}</>;
};

export default RenderIf;
