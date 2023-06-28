import React, { useContext, useState } from "react";
import Button from "../../components/ui/commons/Button";
import Navbar from "../../components/ui/navbar/Navbar";
import { eventService } from "../../services/events.service";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { HiOutlinePhoto } from "react-icons/hi2";
import { eventBase } from "../../utilities/eventBaseJson";
import InputBasic from "../../components/ui/inputs/InputBasic";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

function CreateEvent() {
  const { t } = useTranslation("global");
  const { language } = useContext(AuthContext);
  const [previewImage, setPreviewImage] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (dataForm) => {
    const newEvent = eventBase;
    console.log(dataForm);
    newEvent.title[language] = dataForm.title;
    newEvent.longDescription[language] = dataForm.longDescription;
    newEvent.shortDescription[language] = dataForm.shortDescription;
    newEvent.mode[language].isPresential = dataForm.mode;
    newEvent.mode[language].location = dataForm.location;
    newEvent.startDate = dataForm.startDate;
    newEvent.endDate = dataForm.endDate;
    newEvent.startTime = dataForm.startTime;
    newEvent.endTime = dataForm.endTime;
    newEvent.image = dataForm.image[0];
    try {
      const { data } = await eventService.create(newEvent);
      swal({
        text: "Nuevo evento creado con éxito",
        icon: "success",
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
      swal({
        title: "Error",
        text: error?.message,
        icon: "error",
      });
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] py-[15vh] flex flex-col items-center relative min-h-screen gap-16">
        <h3 className="title3">
          {t("admin.createNewEvent")}: {eventToEdit?.title}
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <InputBasic
            label={t("formEvent.titleEvent")}
            name={"title"}
            register={register}
            placeholder={t("formEvent.titleEvent")}
            type={"text"}
          />
          <label className="font-mulish text-lg my-2">
            {t("formEvent.shortDescription")}
            <textarea
              {...register("shortDescription")}
              placeholder={t("formEvent.shortDescription")}
              className="input rounded-2xl min-h-[8rem] shadow-custom w-full font-roboto font-normal p-4"
            ></textarea>
          </label>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="font-mulish text-lg my-2">
              {t("formEvent.mode")}
              <select
                className="select select-bordere rounded-full shadow-custom w-full font-roboto font-normal "
                {...register("mode")}
              >
                <option value={true}>{t("formEvent.presential")}</option>
                <option value={false}>{t("formEvent.online")}</option>
              </select>
            </label>
            <InputBasic
              label={t("formEvent.location")}
              name={"location"}
              register={register}
              placeholder={t("formEvent.location")}
              type={"text"}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="font-mulish text-lg my-2">
                {t("formEvent.initDate")}
                <input
                  max="2025-01-01"
                  type="date"
                  {...register("startDate")}
                  placeholder={t("formEvent.initDate")}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                {t("formEvent.endDate")}
                <input
                  max="2025-01-01"
                  {...register("endDate")}
                  type="date"
                  placeholder={t("formEvent.endDate")}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
            <div className="grid grid-cols-2  gap-4">
              <label className="font-mulish text-lg my-2">
                {t("formEvent.startTime")}
                <input
                  type="time"
                  {...register("startTime")}
                  placeholder={t("formEvent.startTime")}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                {t("formEvent.endTime")}
                <input
                  {...register("endTime")}
                  type="time"
                  placeholder={t("formEvent.endTime")}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
          </div>
          <h3 className="text-lg font-mulish my-2">
            {t("formEvent.longDescription")}
          </h3>
          <textarea
            {...register("longDescription")}
            placeholder={t("formEvent.longDescription")}
            className="input rounded-2xl min-h-[8rem] shadow-custom w-full font-roboto font-normal p-4"
          ></textarea>
          <InputBasic
            label={t("formEvent.maxParticipants")}
            name={"max_participants"}
            register={register}
            placeholder={t("formEvent.maxParticipants")}
            type={"number"}
          />
          <h3 className="text-lg font-mulish my-2">{t("formEvent.image")}</h3>
          <div className="aspect-video md:aspect-[2/1] w-full rounded-2xl bg-white shadow-custom overflow-hidden ">
            {previewImage ? (
              <img
                src={previewImage}
                className="w-full h-full  object-cover"
                alt="Preview"
              />
            ) : (
              <span className="w-full h-full flex flex-col justify-center items-center animate-pulse">
                <HiOutlinePhoto className="w-20 h-20" />
                {t("formEvent.noFileSelected")}
              </span>
            )}
          </div>

          <input
            type="file"
            required
            {...register("image")}
            className="file-input input-bordered bg-primary self-center text-white w-full max-w-xs"
            onChange={handleImageChange}
          />
          <Button type="submit">{t("formEvent.createEvent")}</Button>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
