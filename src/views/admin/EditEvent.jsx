import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/ui/commons/Button";
import Navbar from "../../components/ui/navbar/Navbar";
import { eventService } from "../../services/events.service";
import { useNavigate, useParams } from "react-router-dom";
import { createEventAdapter } from "../../adapters/event.adapter";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { HiOutlinePhoto } from "react-icons/hi2";
import { eventBase } from "../../utilities/eventBaseJson";
import InputBasic from "../../components/ui/inputs/InputBasic";
import swal from "sweetalert";

function EditEvent() {
  const { id } = useParams();
  const { language } = useContext(AuthContext);
  const [previewImage, setPreviewImage] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const getEvent = async () => {
    const { data } = await eventService.show(id);
    setEventToEdit(createEventAdapter(data?.data, language));
    let initialEvent = createEventAdapter(data?.data, language);
    setValue("max_participants", initialEvent.max_participants);
    setValue("startTime", initialEvent.startTime);
    setValue("endTime", initialEvent.endTime);
    setValue("startDate", initialEvent.startDate);
    setValue("endDate", initialEvent.endDate);
    setValue("title", initialEvent.title);
    setValue("shortDescription", initialEvent.shortDescription);
    setValue("longDescription", initialEvent.longDescription);
    setValue("location", initialEvent.location);
    setValue("image", initialEvent.image[0]);
  };

  useEffect(() => {
    getEvent();
  }, []);

  const onSubmit = async (dataForm) => {
    let newEvent = eventBase;
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
      const { data } = await eventService.update(eventToEdit?.id,newEvent);
      swal({
        text: "Evento editado con éxito",
        icon: "success",
      });
      navigate("/admin");
    } catch (error) {
        console.log(error)
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
        <h3 className="title3">Editing event: {eventToEdit?.title}</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          <InputBasic
            label={"Title event:"}
            name={"title"}
            register={register}
            placeholder={"title of event"}
            type={"text"}
          />
          <label className="font-mulish text-lg my-2">
            Short description
            <textarea
              {...register("shortDescription")}
              placeholder="Descripción corta"
              className="input rounded-2xl min-h-[8rem] shadow-custom w-full font-roboto font-normal p-4"
            ></textarea>
          </label>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="font-mulish text-lg my-2">
              Mode
              <select
                className="select select-bordere rounded-full shadow-custom w-full font-roboto font-normal "
                {...register("mode")}
              >
                <option value={true}>Presential</option>
                <option value={false}>Online</option>
              </select>
            </label>
            <InputBasic
              label={"Location"}
              name={"location"}
              register={register}
              placeholder={"Event location"}
              type={"text"}
            />
          </div>
          <h3 className="text-lg font-mulish my-2">Date and Hour</h3>
          <div className="flex flex-col w-full gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="font-mulish text-lg my-2">
                init date
                <input
                  max="2025-01-01"
                  type="date"
                  {...register("startDate")}
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                End date
                <input
                  max="2025-01-01"
                  {...register("endDate")}
                  type="date"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
            <div className="grid grid-cols-2  gap-4">
              <label className="font-mulish text-lg my-2">
                Init time
                <input
                  type="time"
                  {...register("startTime")}
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                End time
                <input
                  {...register("endTime")}
                  type="time"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
          </div>
          <h3 className="text-lg font-mulish my-2">Long description</h3>
          <textarea
            {...register("longDescription")}
            placeholder="Descripción detallada"
            className="input rounded-2xl min-h-[8rem] shadow-custom w-full font-roboto font-normal p-4"
          ></textarea>
          <InputBasic
            label={"Max participants"}
            name={"max_participants"}
            register={register}
            placeholder={"max_participants"}
            type={"number"}
          />
          <h3 className="text-lg font-mulish my-2">Image</h3>
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
                Ningun archivo seleccionado...
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
          <Button type="submit">CREATE NEW EVENT</Button>
        </form>
      </div>
    </>
  );
}

export default EditEvent;
