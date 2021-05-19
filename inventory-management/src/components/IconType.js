import React from "react";
const IconType = ({ iconname }) => {
  return (
    <span className="">
      {
        {
          add: <img src="../assets/icons/AddIconPng" alt="" />,
          remove: <img src="../assets/icons/RemoveIconPng" alt="" />,
        }[iconname]
      }
    </span>
  );
};

export default IconType;
