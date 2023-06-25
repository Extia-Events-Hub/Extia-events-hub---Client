import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import { Link } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import Button from "../../components/ui/commons/Button";
import { useTranslation } from "react-i18next";

function AdminView() {
  const { t } = useTranslation("global");
  const [openFilters, setOpenFilters] = useState(false);
  const [filterSelected, setFilterSelected] = useState(t("admin.mostRecent"));

  useEffect(() => {
    setFilterSelected(t("events.recently"));
  }, [t]);

  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-16">
        <div className="flex flex-col md:flex-row title2 gap-4">
          <h1>{t("admin.viewEstatistics")}</h1>
          <Link className="underline text-primary">
            {t("admin.createNewEvent")}
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 min-h-[60vh] ">
          <div className="w-full  md:h-[65vh]  md:w-1/2 flex flex-col gap-4">
            <span className="input flex rounded-full justify-between shadow-custom w-full ">
              <input
                type="text"
                placeholder={t("admin.searchEvent") + "..."}
                className="w-full focus:no-underline focus:ring-0"
              />
              <HiOutlineMagnifyingGlass className="btn btn-circle btn-ghost h-8 w-8" />
            </span>
            <div className="w-full   rounded-2xl shadow-custom p-4">
              <div className="w-full  flex items-center font-roboto justify-between">
                <h3 className="text-lg font-bold">{t("admin.eventsList")}</h3>
                <div className="w-full py-3 md:w-1/3 flex justify-center items-center rounded-full backdrop-filter relative backdrop-blur-md  ">
                  <span
                    className=" w-full font-roboto h-full flex justify-center items-center cursor-pointer text-primary select-none  "
                    onClick={() => setOpenFilters(!openFilters)}
                  >
                    <strong className="text-text-color font-mulish pr-2">
                      {t("events.filterBy")}:{" "}
                    </strong>{" "}
                    {filterSelected && filterSelected}{" "}
                    <HiOutlineChevronDown
                      className={
                        openFilters
                          ? "transition-all h-full"
                          : "transition-all h-full rotate-180"
                      }
                    />
                  </span>
                  <ul
                    tabIndex={0}
                    className={
                      openFilters
                        ? "shadow-custom rounded-2xl p-4 absolute w-full top-0 mt-16 bg-white transition-all"
                        : "hidden"
                    }
                  >
                    <li
                      className="flex  hover:text-primary cursor-pointer"
                      onClick={() => {
                        setOpenFilters(false);
                        setFilterSelected(t("admin.mostRecent"));
                      }}
                    >
                      {t("admin.mostRecent")}
                    </li>
                    <li
                      className="flex  hover:text-primary cursor-pointer"
                      onClick={() => {
                        setOpenFilters(false);
                        setFilterSelected(t("admin.past"));
                      }}
                    >
                      {t("admin.past")}
                    </li>
                    <li
                      className="flex  hover:text-primary cursor-pointer"
                      onClick={() => {
                        setOpenFilters(false);
                        setFilterSelected(t("admin.online"));
                      }}
                    >
                      {t("admin.online")}
                    </li>
                    <li
                      className="flex  hover:text-primary cursor-pointer"
                      onClick={() => {
                        setOpenFilters(false);
                        setFilterSelected(t("admin.presential"));
                      }}
                    >
                      {t("admin.presential")}
                    </li>
                  </ul>
                </div>
              </div>
              <span className="divider"></span>
              <ul className="flex grow h-[80%]  flex-col  overflow-y-auto">
                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                  <span className="flex flex-col">
                    <h3 className="text-lg font-bold">Event title</h3>
                    <p>Description</p>
                  </span>
                  <Button>{t("admin.viewEvent")}</Button>
                </li>
                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                  <span className="flex flex-col">
                    <h3 className="text-lg font-bold">Event title</h3>
                    <p>Description</p>
                  </span>
                  <Button>{t("admin.viewEvent")}</Button>
                </li>
                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                  <span className="flex flex-col">
                    <h3 className="text-lg font-bold">Event title</h3>
                    <p>Description</p>
                  </span>
                  <Button>{t("admin.viewEvent")}</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full  md:h-[65vh]  md:w-1/2 rounded-2xl shadow-custom p-4">
            <span className="flex justify-between items-center">
              <h2 className="title3">Event title</h2>
              <Link className="text-primary underline" to="/events/1">
                {t("admin.viewEventsDetails")}
              </Link>
            </span>
            <span className="divider"></span>
            <p className="font-roboto ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              enim tenetur cumque saepe, quasi rem dolore officiis aperiam sequi
              consequuntur autem architecto veritatis sed reprehenderit
              doloremque. Provident molestiae doloremque pariatur.
            </p>
            <h2 className="title3 mt-4">{t("admin.participants")}</h2>
            <span className="divider"></span>
            <ul className="flex flex-col h-[40%] overflow-y-auto">
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
              <li className="flex justify-between p-4">
                <p>Participant</p>
                <p>Email participant</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminView;
