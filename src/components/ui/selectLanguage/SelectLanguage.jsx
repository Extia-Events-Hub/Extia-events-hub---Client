import React, { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronDown } from "react-icons/hi2";

function SelectLanguage({ className }) {
  const [openLenguages, setOpenLenguages] = useState(false);
  const { lenguage, setLenguage } = useContext(AuthContext);
  const [i18] = useTranslation("global");

  return (
    <div
      className={
        "w-full shadow-custom flex justify-center items-center rounded-full backdrop-filter backdrop-blur-sm relative backdrop-blur-md bg-white bg-opacity-60 hover:bg-white " +
        className
      }
    >
      <span
        className="font-bold w-full h-full flex justify-center items-center cursor-pointer select-none gap-4 "
        onClick={() => setOpenLenguages(!openLenguages)}
      >
        {lenguage && lenguage}{" "}
        <HiOutlineChevronDown
          className={
            openLenguages ? "transition-all" : "transition-all rotate-180"
          }
        />
      </span>

      <ul
        tabIndex={0}
        className={
          openLenguages
            ? "shadow-custom rounded-2xl p-4 absolute w-full top-0 mt-16 bg-white transition-all"
            : "hidden"
        }
      >
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer"
          onClick={() => {
            setLenguage("ES");
            setOpenLenguages(false);
            i18.changeLanguage("es");
          }}
        >
          ES
        </li>
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer"
          onClick={() => {
            setLenguage("EN");
            setOpenLenguages(false);
            i18.changeLanguage("en");
          }}
        >
          EN
        </li>
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer"
          onClick={() => {
            setLenguage("FR");
            setOpenLenguages(false);
            i18.changeLanguage("fr");
          }}
        >
          FR
        </li>
      </ul>
    </div>
  );
}

export default SelectLanguage;
