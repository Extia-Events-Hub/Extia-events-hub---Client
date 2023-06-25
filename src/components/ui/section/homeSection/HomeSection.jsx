import React from "react";

function HomeSection({ children, className, title }) {
  return (
    <div className={`w-full flex flex-col gap-8 ${className}`}>
      <span className=" font-mulish w-[90%] text-6xl -mt-[2rem] md:text-8xl  md:-mt-[3rem] -translate-x-3 md:-translate-x-5 opacity-5 absolute overflow-hidden">
        {title}
      </span>
      <h2 className="title1   ">{title}</h2>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default HomeSection;
