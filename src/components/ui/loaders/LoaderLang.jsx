import * as React from "react";
import * as ReactDOM from "react-dom";

const LoaderLang = ({ isLoad }) => {
  return ReactDOM.createPortal(
    <article
      className={`fixed z-30 top-0 left-0 transition-all w-full min-h-screen  backdrop-filter backdrop-blur-md flex justify-center items-center ${
        isLoad ? "flex" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="loading loading-spinner w-[5rem] text-text-color"></span>
    </article>,

    document.getElementById("loader")
  );
};

export default LoaderLang;
