import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  destination: string;
  icon: IconProp;
}

const Button: FC<props> = ({ destination, icon }) => {
  return (
    <Link
      to={destination}
      className="flex justify-center items-center border-sky-500 border-4 p-2 bg-gray-700 w-12 h-12 rounded-full duration-150 ease-in-out hover:bg-sky-500 hover:text-2xl "
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </Link>
  );
};

export default Button;
