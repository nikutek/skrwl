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
      className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-sky-500 bg-gray-700 p-2 duration-150 ease-in-out hover:border-none hover:bg-sky-700 hover:text-2xl hover:saturate-50 md:w-3/4"
      onClick={LogoutHandler}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </button>
  );
};

export default NavbarLogoutButton;
