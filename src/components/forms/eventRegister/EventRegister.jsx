import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/commons/Button";
import { useForm } from "react-hook-form";
import { eventService } from "../../../services/events.service";
import { HiCheckCircle } from "react-icons/hi2";

function EventRegister({ className, id }) {
  const { t } = useTranslation("global");

  const { register, handleSubmit } = useForm();
  const [isSuscribed, setIsSuscribed] = useState(false);

  const submitRegister = async (formData) => {
    const dataSubmit = { ...formData, event_id: id };
    try {
      const { data } = eventService.registerEvent(dataSubmit);
      swal({
        text: "Success",
        icon: "success",
      });
      setIsSuscribed(true);
    } catch (error) {
      swal({
        title: "Error",
        text: error?.message,
        icon: "error",
      });
    }
  };

  return (
    <form
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      onSubmit={handleSubmit(submitRegister)}
      className={`p-4 rounded-2xl shadow-custom relative flex flex-col gap-4 bg-white ${className}`}
    >
      <span
        className={`absolute shadow-none w-[calc(100%-2rem)] rounded-md h-[calc(100%-2rem)] flex justify-center flex-col items-center bg-white transition-all ${
          isSuscribed ? "opacity-100" : "opacity-0 pointer-events-none"
        } `}
      >
        <HiCheckCircle className="text-green-500 w-20 h-20" />
        {t("singleEvent.succesRegister")}
      </span>
      <h2 className="title3 font-semibold font-mulish">
        {t("singleEvent.register")}
      </h2>
      <label className="bold flex flex-col">
        {t("singleEvent.name")}
        <input
          required
          {...register("userName")}
          type="text"
          className="input input-bordered"
          placeholder={t("singleEvent.name")}
        />
      </label>
      <label className="bold flex flex-col">
        {t("singleEvent.email")}
        <input
          required
          {...register("userEmail")}
          type="text"
          className="input input-bordered"
          placeholder={t("singleEvent.email")}
        />
      </label>
      <Button type={"submit"}>{t("singleEvent.getMyTicket")}</Button>
    </form>
  );
}

export default EventRegister;
