import React from "react";

export const Button = ({
  className = null,
  label = "This is a button",
  type = "button",
  ...rest
}) => {
  return (
    <button className={"btn " + className} type={type} {...rest}>
      {label}
    </button>
  );
};
