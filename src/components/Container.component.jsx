import React, { Children } from "react";

const ContainerComponent = ({ children }) => {
  return <div className=" w-[80%] h-full mx-auto">{children}</div>;
};

export default ContainerComponent;
