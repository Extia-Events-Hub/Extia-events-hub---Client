import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/commons/Button";

const EventRegisterFixed = () => {

    const { t } = useTranslation("global");

  return (
    <div className="w-full shadow-custom z-20  bg-white fixed px-4 flex flex-col gap-4 bottom-0 font-roboto md:hidden">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title ">
          <h2 className="title2 font-mulish">{t("singleEvent.register")} <span className="underline text-primary animate-pulse ">{t("singleEvent.here")}</span></h2>
        </div>
        <form className="collapse-content flex flex-col gap-4 bg-white ">
          <label className="bold flex flex-col">
            {t("singleEvent.name")}
            <input
              required
              type="text"
              className="input input-bordered"
              placeholder={t("singleEvent.name")}
            />
          </label>
          <label className="bold flex flex-col">
            {t("singleEvent.email")}
            <input
              required
              type="text"
              className="input input-bordered"
              placeholder={t("singleEvent.email")}
            />
          </label>
          <Button>{t("singleEvent.getMyTicket")}</Button>
        </form>
      </div>
    </div>
  );
};

export default EventRegisterFixed;
