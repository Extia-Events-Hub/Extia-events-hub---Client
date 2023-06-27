import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import eventsList from "../../utilities/eventsData.json";
import { EventCard } from "../../components/ui/cards/eventCard/EventCard";
import { useTranslation } from "react-i18next";
import FilterEvents from "../../components/filterEvents/FilterEvents";
import { eventService } from "../../services/events.service";
import { createEventAdapter } from "../../adapters/event.adapter";
import AuthContext from "../../context/AuthContext";

function Events() {
  const { t } = useTranslation("global");

  const { language } = useContext(AuthContext);

  const [eventsData, setEventsData] = useState(null);

  const [filteredEventList, setFilteredEventList] = useState(eventsData);

  const getEvents = async () => {
    const { data } = await eventService.index();
    const eventsAdapted = await data?.data?.map((event) => {
      return createEventAdapter(event, language);
    });
    setEventsData(eventsAdapted);
    setFilteredEventList(eventsAdapted)
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%]  flex flex-col relative min-h-screen gap-8">
        {/* Hero section */}
        <div className="w-full flex flex-col justify-center items-center mt-[15vh] min-h-[40vh] md:min-h-[50vh] gap-4">
          <span className=" font-mulish w-[90%] text-6xl -mt-[2rem] md:text-8xl -translate-y-20  opacity-5 absolute text-center overflow-hidden">
            Extia Events Hub
          </span>
          <h1 className="title1">Extia Events Hub</h1>
          <p className="font-roboto max-w-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione
            quod laborum rem, reiciendis facilis magnam unde placeat fugit
            aliquam pariatur veritatis adipisci iste eius soluta perspiciatis
            sint! Accusamus, molestias?
          </p>
        </div>
        <div className="w-full  md:p-0  flex flex-col gap-8">
          {/* Searchbar */}
          <FilterEvents
            initialList={eventsData}
            setFilteredEventList={setFilteredEventList}
          />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEventList &&
              filteredEventList?.map((event, index) => {
                return <EventCard key={index} event={event} />;
              })}
          </div>
        </div>
      </div>
      <Footer className="mt-24" />
    </>
  );
}

export default Events;
