import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import eventsList from "../../utilities/eventsData.json";
import { EventCard } from "../../components/ui/cards/eventCard/EventCard";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import AuthContext from "../../context/AuthContext";
import FilterEvents from "../../components/filterEvents/FilterEvents";

function Events() {
  const { t } = useTranslation("global");
  // const [openFilters, setOpenFilters] = useState(false);
  const { lenguage } = useContext(AuthContext);
  // const [filterSelected, setFilterSelected] = useState(t("events.recently"));
  const [initialEventList, setInitialEventList] = useState(eventsList);
  const [filteredEventList, setFilteredEventList] = useState(eventsList);

  const [searchTerm, setSearchTerm] = useState("");

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value.toLowerCase());
  // };

  // const filterModeIsPresential = (isPresential) => {
  //   const cloneEventList = eventsList.filter(
  //     (event) =>
  //       event.mode[lenguage.toLowerCase()].isPresential === isPresential
  //   );

  //   return setEventListData(cloneEventList);
  // };

  // const filteredEvents = eventListData.filter((event) => {
  //   const title = event.title[lenguage.toLowerCase()].toLowerCase();
  //   const description =
  //     event.shortDescription[lenguage.toLowerCase()].toLowerCase();

  //   return title.includes(searchTerm) || description.includes(searchTerm);
  // });

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
            initialList={initialEventList}
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
