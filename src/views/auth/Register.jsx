import React from "react";
import FormRegister from "../../components/forms/auth/FormRegister";
import penImage from "../../assets/images/3dpen.png";

function Register() {
  return (
    <div className="w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen ">
      <FormRegister className="rounded-2xl  md:rounded-r-none justify-center lg:px-16" />
      <div className=" bg-white rounded-r-2xl shadow-custom hidden relative md:flex justify-center items-center">
        <img
          className="w-full shadow-inner max-w-md drop-shadow-2xl "
          src={penImage}
          alt="pen image"
        />
      </div>
    </div>
  );
}

export default Register;
