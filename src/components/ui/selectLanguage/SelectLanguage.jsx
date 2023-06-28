import React, { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronDown } from "react-icons/hi2";

function SelectLanguage({ className }) {
  const [openLanguages, setOpenLanguages] = useState(false);
  const { language, setLanguage } = useContext(AuthContext);
  const [t, i18] = useTranslation("global");

  return (
    <div
      className={
        "w-full shadow-custom flex justify-center items-center rounded-full backdrop-filter relative backdrop-blur-md bg-white bg-opacity-60 hover:bg-white " +
        className
      }
    >
      <span
        className="font-bold w-full h-full flex justify-center items-center cursor-pointer select-none gap-4 hover:text-primary transition-all "
        onClick={() => setOpenLanguages(!openLanguages)}
      >
        {language && language.toUpperCase()}
        <HiOutlineChevronDown
          className={
            openLanguages ? "transition-all" : "transition-all rotate-180"
          }
        />
      </span>

      <ul
        tabIndex={0}
        className={
          openLanguages
            ? "shadow-custom rounded-2xl p-4 absolute w-full top-0 mt-16 bg-white transition-all"
            : "hidden"
        }
      >
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer hover:text-primary"
          onClick={() => {
            setLanguage("es");
            setOpenLanguages(false);
            i18.changeLanguage("es");
          }}
        >
          ES
        </li>
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer hover:text-primary"
          onClick={() => {
            setLanguage("en");
            setOpenLanguages(false);
            i18.changeLanguage("en");
          }}
        >
          EN
        </li>
        <li
          className="flex justify-center hover:bg-neutral-100 cursor-pointer hover:text-primary"
          onClick={() => {
            setLanguage("fr");
            setOpenLanguages(false);
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
