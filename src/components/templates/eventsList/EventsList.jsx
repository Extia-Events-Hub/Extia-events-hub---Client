import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/commons/Button";
import AuthContext from "../../../context/AuthContext";
import FilterEvents from "../../filterEvents/FilterEvents";
import { Link } from "react-router-dom";
import { eventService } from "../../../services/events.service";
import swal from "sweetalert";

function EventsList({ className, eventsList, getEvents }) {
  const { t } = useTranslation("global");
  const [initialEventList, setInitialEventList] = useState(eventsList);
  const [filteredEventList, setFilteredEventList] = useState(eventsList);

  useEffect(() => {
    setInitialEventList(eventsList);
    setFilteredEventList(eventsList);
  }, [eventsList]);

  const deleteEvent = (eventId) => {
    try {
      const { data } = eventService.delete(eventId);
      swal({
        title: t("admin.confirmDelete"),
        icon: "warning",
        dangerMode: true,
        buttons: {
          cancel: {
            text: t("admin.cancel"),
            value: null,
            visible: true,
            className: "",
            closeModal: true,
          },
          confirm: {
            text: t("admin.confirm"),
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
      }).then((willDelete) => {
        if (willDelete) {
          swal(t("admin.successDelete"), {
            icon: "success",
          });
          window.location.reload();
        }
      });

      getEvents();
    } catch (error) {}
  };

  return (
    <div className={`w-full  flex flex-col gap-8 ${className}`}>
      <FilterEvents
        initialList={initialEventList}
        setFilteredEventList={setFilteredEventList}
      />
      <div className="w-full h-full  rounded-2xl shadow-custom p-4">
        <h2 className="title3 md:title2">{t("admin.eventsList")}</h2>
        <span className="divider"></span>

        <ul className="flex max-h-[30vh] md:max-h-[75%]   flex-col  overflow-y-auto">
          {filteredEventList ? (
            filteredEventList?.map((event, index) => {
              return (
                <li
                  key={index}
                  className="w-full flex flex-col md:flex-row gap-4 p-4 hover:bg-gray-100  md:items-center justify-between"
                >
                  <span className="flex flex-col md:w-1/2 ">
                    <Link className="w-auto" to={`/events/${event?.id}`}>
                      <h3 className="text-lg font-bold underline underline-offset-2 hover:text-primary">
                        {event?.title}
                      </h3>
                    </Link>
                    <p>{event?.shortDescription}</p>
                  </span>
                  {/* <span className="divider horizontal divider-horizontal hidden md:flex"></span> */}

                  {/* <span>{t("admin.participants")} </span> */}
                  <span className="divider horizontal divider-horizontal hidden md:flex"></span>
                  <Link to={`/edit-event/${event?.id}`}>
                    <Button className={"w-full md:w-auto"}>
                      {t("admin.editEvent")}
                    </Button>
                  </Link>
                  <span className="divider horizontal divider-horizontal hidden md:flex"></span>
                  <Button onClick={() => deleteEvent(event?.id)}>
                    {t("admin.deleteEvent")}
                  </Button>
                </li>
              );
            })
          ) : (
            <span></span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default EventsList;
