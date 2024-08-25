import React from "react";
import "./icon-prop.css";

const IconContainer = ({ children, bgColor, theme }) => {
  return <div className={`icon-prop ${theme}`}>{children}</div>;
};

export default IconContainer;
