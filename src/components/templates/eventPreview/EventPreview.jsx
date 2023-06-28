import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AuthContext from "../../../context/AuthContext";

function EventPreview({ className, eventSelected }) {
  const { t } = useTranslation("global");

  const { lenguage } = useContext(AuthContext);

  const eventTraduced = {
    id: eventSelected?.id,
    title: eventSelected?.title[lenguage.toLowerCase()],
    shortDescription: eventSelected?.shortDescription[lenguage.toLowerCase()],
    longDescription: eventSelected?.longDescription[lenguage.toLowerCase()],
    mode: eventSelected?.mode[lenguage.toLowerCase()],
    startDate: eventSelected?.startDate,
    endDate: eventSelected?.endDate,
    startTime: eventSelected?.startTime,
    endTime: eventSelected?.endTime,
    image: eventSelected?.image,
  };

  return (
    <>
      {eventSelected === null ? (
        <div
          className={`w-full   rounded-2xl shadow-custom p-4 flex justify-center items-center ${className}`}
        >
          No event selected
        </div>
      ) : (
        <div
          className={`w-full overflow-y-auto   rounded-2xl shadow-custom p-4 mb-10 ${className}`}
        >
          <h2 className="title3">{eventTraduced.title}</h2>
          <span className="divider"></span>
          <div className="flex flex-col gap-4">
            <p className="font-roboto ">{eventTraduced?.shortDescription}</p>
            <p className="font-roboto ">{eventTraduced?.longDescription}</p>
            <p>
              {eventTraduced?.startDate} -- {eventTraduced?.startTime} -{" "}
              {eventTraduced?.endTime}
            </p>
            <h4 className="font-bold">
              {eventTraduced?.mode.location
                ? eventTraduced?.mode.location
                : t("eventCard.online")}
            </h4>
          </div>
          <h2 className="title3 mt-4">{t("admin.participants")}</h2>
          <span className="divider"></span>
          <ul className="flex flex-col h-[20vh] md:h-[40%] ">
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
      )}
    </>
  );
}

export default EventPreview;
