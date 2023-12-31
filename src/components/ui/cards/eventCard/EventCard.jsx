import React from "react";
import Button from "../../commons/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function EventCard({ event, className }) {
  const { t } = useTranslation("global");

  const locationEvent =
    event?.isPresential === true ? event?.location : t("eventCard.online");
  const date = event?.startDate;

  return (
    <article
      className={`min-w-[18rem] bg-white shadow-custom rounded-2xl overflow-hidden flex flex-col items-center h-auto ${className}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full">
        <img
          src={event?.image}
          alt="cover event"
          className="w-full aspect-video object-cover"
        />
      </div>
      <div className="p-4 font-roboto w-full gap-4 flex flex-col items-start">
        <h3 className="font-roboto font-bold text-lg">{event?.title}</h3>
        <h2 className="text-primary">
          {event && date} - {event && event.startTime}
        </h2>
        <h2 className=" text-neutral-400 ">{event && locationEvent}</h2>
        <Link className=" self-end" target="_blank" to={"/events/" + event?.id}>
          <Button>{t("admin.viewEvent")}</Button>
        </Link>
      </div>
    </article>
  );
}
