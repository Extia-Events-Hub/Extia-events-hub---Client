import React from "react";

function HomeSection({ children, className, title }) {
  return (
    <div className={`w-full flex flex-col gap-8 ${className}`}>
      <span
        data-aos="fade-rigth"
        data-aos-duration="1000"
        className="animated-element translate-x-[-120px] transition-transform duration-500 ease-in-out font-mulish w-[90%] text-6xl -mt-[2rem] md:text-8xl  md:-mt-[3rem] -ml-2 md:-ml-8  !opacity-5 absolute overflow-hidden"
      >
        {title}
      </span>
      <h2
        className="title1 animated-element translate-x-[-80px] transition-transform duration-500 ease-in-out"
        data-aos="fade-rigth"
        data-aos-duration="1000"
      >
        {title}
      </h2>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default HomeSection;
