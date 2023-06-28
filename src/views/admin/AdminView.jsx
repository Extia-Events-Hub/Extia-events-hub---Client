import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EventsList from "../../components/templates/eventsList/EventsList";
import { eventService } from "../../services/events.service";
import { createEventAdapter } from "../../adapters/event.adapter";
import AuthContext from "../../context/AuthContext";

function AdminView() {
  const { t } = useTranslation("global");
  const { language } = useContext(AuthContext);

  const [eventsData, setEventsData] = useState([]);

  const getEvents = async () => {
    const { data } = await eventService.index();
    const eventsAdapted = await data?.data?.map((event) => {
      return createEventAdapter(event, language);
    });
    setEventsData(eventsAdapted);
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-8">
        <div className="flex flex-col md:flex-row title3 gap-4">
          <h1>{t("admin.viewEstatistics")}</h1>
          <Link to={"/create-event"} className="underline text-primary">
            {t("admin.createNewEvent")}
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 min-h-[60vh] ">
          <EventsList
            getEvents={getEvents}
            eventsList={eventsData || []}
            className={"md:h-[50vh]  md:w-full"}
          />
        </div>
      </div>
    </>
  );
}

export default AdminView;
