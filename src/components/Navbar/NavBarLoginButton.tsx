import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { setActiveUser } from "../../storage/userSlice";

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
      className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-sky-500 bg-gray-700 p-2 duration-150 ease-in-out hover:border-none hover:bg-sky-700 hover:text-2xl hover:saturate-50 md:w-3/4"
      onClick={LoginHandler}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#e5e7eb" }} />
    </button>
  );
};

export default NavBarLoginButton;
