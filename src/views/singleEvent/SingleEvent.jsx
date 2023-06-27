import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import { HiCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { eventService } from "../../services/events.service";
import AuthContext from "../../context/AuthContext";
import moment from "moment";
import EventRegisterFixed from "../../components/forms/eventRegister/EventRegisterFIxed";
import EventRegister from "../../components/forms/eventRegister/EventRegister";
import { createEventAdapter } from "../../adapters/event.adapter";

function SingleEvent() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const { language } = useContext(AuthContext);
  const { t } = useTranslation("global");

  const formattedDate = (dateStr) => moment(dateStr).format("DD/MMM/YY");

  const getEvent = async () => {
    const { data } = await eventService.show(id);
    setEvent(createEventAdapter(data?.data,language));
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-8">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aspect-video md:aspect-[4/1] w-full rounded-2xl bg-white shadow-custom overflow-hidden "
        >
          <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="w-full h-full  flex gap-8">
          <div className=" w-full md:w-1/2 flex pb-12  flex-col gap-4">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="title2">
              {event?.title ?? (
                <span className="loading loading-dots loading-md md:loading-lg"></span>
              )}
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000">
              {event?.shortDescription}
            </p>
            <span className="divider"></span>

            <h2 className="title2">{t("singleEvent.whereAndWhen")} </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="w-full rounded-2xl shadow-custom flex flex-col md:flex-row items-center p-4 justify-between"
            >
              <div className="w-1/2 flex flex-col items-center">
                <HiCalendarDays className="w-16 h-16 md:w-20 md:h-20 aspect-square" />
                <p className="text-md font-roboto">
                  {formattedDate(event?.startDate)}
                  {formattedDate(event?.endDate) !==
                    formattedDate(event?.startDate) && (
                    <> - {formattedDate(event?.startDate)}</>
                  )}
                </p>

                <p className="text-md font-roboto">
                  {event?.startTime} - {event?.endTime}
                </p>
              </div>
              <span className="divider md:divider-horizontal"></span>
              <div className="w-1/2 flex flex-col items-center">
                <HiOutlineMapPin className="w-16 h-16 md:w-20 md:h-20 aspect-square" />
                <p className="text-md font-roboto">
                  {event?.isPresential
                    ? t("events.presential") + ": "
                    : t("events.online") + ": "}
                  {event?.location}
                </p>
              </div>
            </div>

            <span className="divider"></span>

            <h2 className="title2">{t("singleEvent.aboutTheEvent")}</h2>
            <div className="flex flex-col gap-4 font-roboto">
              {event?.title ?? (
                <span className="loading loading-dots loading-md md:loading-lg"></span>
              )}
            </div>
          </div>
          <div className=" w-full hidden md:block md:w-1/2  min-h-screen ">
            <EventRegister className={"sticky top-[12vh]"} />
          </div>
        </div>
      </div>
      <EventRegisterFixed />
      <Footer className="pb-28" />
    </>
  );
}

export default SingleEvent;
