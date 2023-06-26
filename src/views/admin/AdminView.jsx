import React, { useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EventsList from "../../components/templates/eventsList/EventsList";
import eventsJson from "../../utilities/eventsData.json";
import EventPreview from "../../components/templates/eventPreview/EventPreview";

function AdminView() {
  const { t } = useTranslation("global");
  const [eventSelected, setEventSelected] = useState(null);

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
          <EventsList
            eventsList={eventsJson}
            setEventSelected={setEventSelected}
            className={"md:h-[65vh]  md:w-1/2"}
          />
          <EventPreview
            className={"md:h-[65vh]  md:w-1/2"}
            eventSelected={eventSelected}
          />
        </div>
      </div>
    </>
  );
}

export default AdminView;
