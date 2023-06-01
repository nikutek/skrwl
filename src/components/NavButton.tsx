import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  destination: string;
  icon: IconProp;
}

const Button: FC<props> = ({ destination, icon }) => {
  const activeStyles =
    "flex justify-center items-center p-2 bg-sky-500 w-12 h-12 rounded-full duration-150 ease-in-out";

  const nonActiveStyles =
    "flex justify-center items-center border-sky-500 border-4 p-2 bg-gray-700 w-12 h-12 rounded-full duration-150 ease-in-out hover:bg-sky-700 hover:text-2xl hover:border-none hover:saturate-50";

  return (
    <NavLink
      to={destination}
      className={({ isActive }) => {
        return isActive ? activeStyles : nonActiveStyles;
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </NavLink>
  );
};

export default Button;
