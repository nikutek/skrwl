import React from "react";

const FormGroup = ({ name, children }) => {
  return (
    <div className=" flex justify-center items-center m-2 flex-wrap w-full">
      <label htmlFor={name} className="  block w-full text text-sky-500 ml-2">
        {name}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
