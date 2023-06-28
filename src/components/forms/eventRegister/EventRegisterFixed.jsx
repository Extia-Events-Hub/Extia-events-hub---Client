import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/commons/Button";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { HiCheckCircle } from "react-icons/hi2";
import { eventService } from "../../../services/events.service";

const EventRegisterFixed = ({ id }) => {
  const { t } = useTranslation("global");
  const { register, handleSubmit } = useForm();
  const [isSuscribed, setIsSuscribed] = useState(false);

  const submitRegister = async (formData) => {
    const dataSubmit = { ...formData, event_id: id };
    try {
      const { data } = await eventService.registerEvent(dataSubmit);
      swal({
        text: "Success",
        icon: "success",
      });
      setIsSuscribed(true);
    } catch (error) {
      error?.response?.status === 400
        ? swal({
            title: "Error",
            text: t("singleEvent.userRegisterError"),
            icon: "error",
          })
        : swal({
            title: "Error",
            text: error?.message,
            icon: "error",
          });
    }
  };

  return (
    <div className="w-full shadow-custom z-20  bg-white fixed px-4 flex flex-col gap-4 bottom-0 font-roboto md:hidden">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title ">
          <h2 className="title2 font-mulish">
            {t("singleEvent.register")}{" "}
            <span className="underline text-primary animate-pulse ">
              {t("singleEvent.here")}
            </span>
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(submitRegister)}
          className="collapse-content flex flex-col gap-4 relative bg-white "
        >
          <span
            className={`absolute shadow-none w-[calc(100%-2rem)] rounded-md h-[calc(100%-1rem)] flex justify-center flex-col items-center bg-white transition-all ${
              isSuscribed ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
          >
            <HiCheckCircle className="text-green-500 w-20 h-20" />
            {t("singleEvent.successRegister")}
          </span>
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
              {...register("userEmail")}
              required
              type="text"
              className="input input-bordered"
              placeholder={t("singleEvent.email")}
            />
          </label>
          <Button type={"submit"}>{t("singleEvent.getMyTicket")}</Button>
        </form>
      </div>
    </div>
  );
};

export default EventRegisterFixed;
