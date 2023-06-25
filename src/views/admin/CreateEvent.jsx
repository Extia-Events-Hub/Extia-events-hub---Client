import React from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import Button from "../../components/ui/commons/Button";

function CreateEvent() {
  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className="w-full px-[5%] md:px-[10%] py-[15vh] flex flex-col items-center relative min-h-screen gap-16">
        <form action="" className="w-full md:w-1/2 flex flex-col gap-4">
          <label className="font-mulish text-lg my-2">
            Name event:
            <input
              type="text"
              placeholder={"..."}
              className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
            />
          </label>
          <label className="font-mulish text-lg my-2">
            Short description
            <textarea
              placeholder="Descripción corta"
              className="input rounded-2xl min-h-16 shadow-custom w-full font-roboto font-normal p-4"
            ></textarea>
          </label>
          <div className="flex gap-4">
            <label className="font-mulish text-lg my-2">
              Type
              <input
                type="text"
                placeholder={"..."}
                className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
              />
            </label>
            <label className="font-mulish text-lg my-2">
              Location
              <input
                type="text"
                placeholder={"..."}
                className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
              />
            </label>
          </div>
          <h3 className="text-lg font-mulish my-2">Date and Hour</h3>
          <div className="flex flex-col w-full gap-4">
            <div className="flex  gap-4">
              <label className="font-mulish text-lg my-2">
                init date
                <input
                  type="text"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                End date
                <input
                  type="text"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
            <div className="flex  gap-4">
              <label className="font-mulish text-lg my-2">
                Init time
                <input
                  type="text"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
              <label className="font-mulish text-lg my-2">
                End time
                <input
                  type="text"
                  placeholder={"..."}
                  className="input rounded-full shadow-custom w-full font-roboto font-normal p-4"
                />
              </label>
            </div>
          </div>
          <h3 className="text-lg font-mulish my-2">Long description</h3>
          <textarea
            placeholder="Descripción detallada"
            className="input rounded-2xl min-h-[8rem] shadow-custom w-full font-roboto font-normal p-4"
          ></textarea>

          <Button>CREATE NEW EVENT</Button>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
