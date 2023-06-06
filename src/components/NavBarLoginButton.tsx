import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { setActiveUser } from "../storage/UserSlice";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarLoginButton = ({ icon }) => {
  const dispatch = useDispatch();

  const LoginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) return;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(
          setActiveUser({
            token: user.uid,
            userName: user.displayName,
            userEmail: user.email,
          })
        );
        // // IdP data available using getAdditionalUserInfo(result)
        // VJbTmsOt1mP4mkWHcJoIkzzGr4W2
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <button
      className="flex justify-center items-center border-sky-500 border-4 p-2 bg-gray-700 w-12 h-12 rounded-full duration-150 ease-in-out hover:bg-sky-700 hover:text-2xl hover:border-none hover:saturate-50"
      onClick={LoginHandler}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </button>
  );
};

export default NavBarLoginButton;
