import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import Button from "../../ui/commons/Button";
import AuthContext from "../../../context/AuthContext";

function EventsList({ className, eventsList, setEventSelected }) {
  const { t } = useTranslation("global");
  const [openFilters, setOpenFilters] = useState(false);
  const { lenguage } = useContext(AuthContext);
  const [filterSelected, setFilterSelected] = useState(t("admin.mostRecent"));
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredEvents = eventsList.filter((event) => {
    const title = event.title[lenguage.toLowerCase()].toLowerCase();
    const description =
      event.shortDescription[lenguage.toLowerCase()].toLowerCase();

    return title.includes(searchTerm) || description.includes(searchTerm);
  });

  useEffect(() => {
    setFilterSelected(t("events.recently"));
    console.log(eventsList);
  }, [t]);

  return (
    <div className={`w-full  flex flex-col gap-4 ${className}`}>
      <span className="input flex rounded-full justify-between shadow-custom w-full ">
        <input
          type="text"
          placeholder={t("admin.searchEvent") + "..."}
          className="w-full focus:no-underline focus:ring-0"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <HiOutlineMagnifyingGlass className="btn btn-circle btn-ghost h-8 w-8" />
      </span>
      <div className="w-full h-[87%]   rounded-2xl shadow-custom p-4">
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
        <ul className="flex max-h-[30vh] md:max-h-[75%]   flex-col  overflow-y-auto">
          {filteredEvents &&
            filteredEvents?.map((event) => {
              return (
                <li className="w-full flex flex-col md:flex-row gap-4 p-4 hover:bg-gray-100 cursor-pointer md:items-center justify-between">
                  <span className="flex flex-col">
                    <h3 className="text-lg font-bold">
                      {event.title[lenguage.toLowerCase()]}
                    </h3>
                    <p>{event.shortDescription[lenguage.toLowerCase()]}</p>
                  </span>
                  <Button onClick={() => setEventSelected(event)}>
                    {t("admin.viewEvent")}
                  </Button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default EventsList;
