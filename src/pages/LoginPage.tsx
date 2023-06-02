import React, { useState } from "react";
import FormGroup from "../components/FormGroup";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const inputStyle =
    "text-lg text-gray-200 py-1 px-2 rounded-md bg-gray-600 w-full";
  const LogInBtnHandler = () => {
    console.log("huj");
  };

  return (
    <form className=" w-3/5 h-full flex items-center justify-center flex-col mx-auto gap-3">
      <button
        className={
          isLogin
            ? " p-5 text-5xl absolute top-3 left-3 text-sky-500 drop-shadow-lg"
            : " text-md absolute top-10 left-5 drop-shadow-lg text-right"
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
            ? " text-md absolute top-10 right-5 drop-shadow-lg text-right"
            : "top-10 right-5 text-red-500"
        }
        onClick={(e) => {
          e.preventDefault();
          setIsLogin(false);
        }}
      >
        Sign Up
      </button>

      <FormGroup name={"Username"}>
        <input type="text" name="login" className={inputStyle} />
      </FormGroup>

      <FormGroup name={"Password"}>
        <input type="password" name="password" className={inputStyle} />
      </FormGroup>

      {!isLogin ? (
        <FormGroup name="Confirm Password">
          <input type="password" name="Confirm Password" />
        </FormGroup>
      ) : undefined}

      <button
        onClick={LogInBtnHandler}
        className=" bg-sky-500 w-4/5 rounded-xl text-xl p-2 m-3"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginPage;
