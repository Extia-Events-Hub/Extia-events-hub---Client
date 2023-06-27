import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { EventCard } from "../../components/ui/cards/eventCard/EventCard";
import Footer from "../../components/ui/footer/Footer";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import HomeSection from "../../components/ui/section/homeSection/HomeSection";
import HomeHeader from "../../components/ui/header/HomeHeader";
import { eventService } from "../../services/events.service";
import { createEventAdapter } from "../../adapters/event.adapter";

function Home() {
  const { t } = useTranslation("global");
  const [eventsData, setEventsData] = useState(null);

  const getEvents = async () => {
    const { data } = await eventService.index();
    const eventsAdapted = data?.data?.map((event) => {
      return createEventAdapter(event);
    });
    setEventsData(eventsAdapted);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const brandList = ["", "", "", "", ""];

  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-8">
        {/* Header */}
        <HomeHeader />

        <HomeSection
          className={"pt-16 md:pt-24 md:p-0 "}
          title={t("home.events")}
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData ? (
              eventsData?.map((event, index) => {
                return <EventCard key={index} event={event} />;
              })
            ) : (
              <div className="w-full col-span-full py-16 flex justify-center items-center">
                <span className="loading text-primary loading-dots loading-md md:loading-lg"></span>
              </div>
            )}
          </div>
          <span className="w-full flex justify-center pt-16">
            <Link
              className="font-mulish text-2xl text-primary underline underline-offset-4 animate-bounce flex gap-4"
              to="/events"
            >
              {t("home.moreEvents")} <HiArrowRight className="translate-y-1" />
            </Link>
          </span>
        </HomeSection>

        <HomeSection
          className={"pt-12 md:pt-24"}
          title={t("home.collaborators")}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {brandList?.map((event, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="shadow-custom rounded-2xl p-4 flex justify-center items-center"
                >
                  <h2 className="title3 opacity-30">BRAND</h2>
                </div>
              );
            })}
          </div>
        </HomeSection>
      </div>
      <Footer className="mt-24" />
    </>
  );
}

export default Home;
