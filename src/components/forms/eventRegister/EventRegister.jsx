import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/commons/Button";

function EventRegister({ className }) {
  const { t } = useTranslation("global");

  return (
    <form
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      className={`p-4 rounded-2xl shadow-custom flex flex-col gap-4 bg-white ${className}`}
    >
      <h2 className="title3 font-semibold font-mulish">
        {t("singleEvent.register")}
      </h2>
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
  );
}

export default EventRegister;
