import React from "react";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../../storage/UserSlice";

import { signOut, getAuth } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { setActiveUser } from "../../storage/UserSlice";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarLogoutButton = ({ icon }) => {
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    console.log("huj");
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        console.log("signOut sucessful");
        dispatch(setUserLogOutState());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <button
      className="flex justify-center items-center border-sky-500 border-4 p-2 bg-gray-700 w-12 h-12 rounded-full duration-150 ease-in-out hover:bg-sky-700 hover:text-2xl hover:border-none hover:saturate-50"
      onClick={LogoutHandler}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </button>
  );
};

export default NavbarLogoutButton;
