import React from "react";
import { useTranslation } from "react-i18next";
import calendarImage from "../../../assets/images/calendar_image_3d.png";
import { HiArrowDown } from "react-icons/hi2";

function HomeHeader() {
  const { t } = useTranslation("global");

  return (
    <div className="w-full h-[70vh] md:h-[60vh] md:mt-[10vh] relative  flex gap-8 md:flex-row md:justify-center items-center  ">
      <div className="w-full flex flex-col-reverse gap-24 md:flex-row md:mb- ">
        <div
          className="w-full md:w-1/2 flex flex-col md:justify-center gap-4"
          
        >
          <h2 data-aos="fade-up "
          data-aos-duration="2000"
          data-aos-delay="200" className="title1 font-mulish">{t("home.titleEventsHub")}</h2>
          <p data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800" className="leading-7 md:text-lg">
            {t("home.descriptionEventsHub")}
          </p>
        </div>
        <div className="w-full md:w-7/12 flex justify-center items-center  relative">
          <div className="w-4/5 aspect-square rounded-full absolute bg-primary opacity-30 shadow-custom"></div>
          <img
            src={calendarImage}
            className=" max-w-xs md:max-w-full drop-shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
            alt="calendarImage"
          ></img>
        </div>
      </div>
      {/* <span className="absolute bottom-0 animate-bounce hidden md:block ">
        <HiArrowDown className="text-primary h-8 w-8 translate-y-10 drop-shadow-lg" />
      </span> */}
    </div>
  );
}

export default HomeHeader;
