import React, { useState } from "react";
import FormGroup from "../components/FormGroup";

import { Auth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "../storage/UserSlice";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const inputStyle =
    "text-lg text-gray-200 py-1 px-2 rounded-md bg-gray-600 w-full";

  const LogInBtnHandler = () => {
    console.log("huj");
  };

  const RegisterBtnHandler = () => {};

  return (
    <form className=" w-3/5 h-full flex items-center justify-center flex-col mx-auto gap-3">
      <button
        className={
          isLogin
            ? " p-5 text-5xl absolute top-3 left-3 text-sky-500 "
            : " text-md absolute top-10 left-5  text-right"
        }
        onClick={(e) => {
          e.preventDefault();
          setIsLogin(true);
        }}
      >
        Log In
      </button>

      <button
        className={
          isLogin
            ? " text-md absolute top-10 right-5  text-right"
            : "text-5xl  text-sky-500 absolute top-10 right-5 text-right "
        }
        onClick={(e) => {
          e.preventDefault();
          setIsLogin(false);
        }}
      >
        Sign Up
      </button>

      <FormGroup name={"Username"}>
        <input type="text" name="login" className={inputStyle} required />
      </FormGroup>

      <FormGroup name={"Password"}>
        <input
          type="password"
          name="password"
          className={inputStyle}
          required
        />
      </FormGroup>

      {!isLogin && (
        <FormGroup name="Confirm Password">
          <input
            type="password"
            name="Confirm Password"
            className={inputStyle}
          />
        </FormGroup>
      )}

      {isLogin ? (
        <button
          onClick={LogInBtnHandler}
          className=" bg-sky-500 w-4/5 rounded-xl text-xl p-2 m-3"
        >
          Log in
        </button>
      ) : (
        <button
          onClick={RegisterBtnHandler}
          className=" bg-sky-500 w-4/5 rounded-xl text-xl p-2 m-3"
        >
          Sign up
        </button>
      )}
    </form>
  );
};

export default LoginPage;
