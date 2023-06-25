import React from "react";
import { useTranslation } from "react-i18next";
import calendar_image from "../../../assets/images/calendar_image_3d.png";
import { HiArrowDown } from "react-icons/hi2";

function HomeHeader() {
  const { t } = useTranslation("global");

  return (
    <div className="w-full h-[70vh] relative  flex gap-8 md:flex-row md:justify-center items-center  ">
      <div className="w-full flex flex-col-reverse gap-24 md:flex-row ">
        <div
          className="w-full md:w-1/2 flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2 className="title1 font-mulish">{t("home.titleEventsHub")}</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quibusdam blanditiis voluptatum id aut cumque eveniet, debitis
            dolore est sint quod porro eos a unde. Sapiente id sunt alias?
            Culpa!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center  relative">
          <div className="w-4/5 aspect-square rounded-full absolute bg-primary opacity-30 shadow-custom"></div>
          <img
            src={calendar_image}
            className=" max-w-xs md:max-w-full drop-shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            alt="calendar_image"
          ></img>
        </div>
      </div>
      <span className="absolute bottom-0 animate-bounce hidden md:block ">
        <HiArrowDown className="text-primary h-8 w-8 translate-y-10 drop-shadow-lg" />
      </span>
    </div>
  );
}

export default HomeHeader;
