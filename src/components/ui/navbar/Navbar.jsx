import React, { useContext, useEffect, useState } from "react";
import {
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
  HiUserCircle,
} from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AuthContext from "../../../context/AuthContext";
import SelectLanguage from "../selectLanguage/SelectLanguage";
import logo from "../../../assets/images/logo_header.svg";
import { useTranslation } from "react-i18next";

function Navbar({ className }) {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const { setUser, setToken, token } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);
  console.log("token", token && "existe");

  const logout = () => {
    swal({
      title: "¿Desea cerrar su sesión actual?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancelar",
          value: false,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Si",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Tu sesión ha sido cerrada con éxito.", {
          icon: "success",
        });
        setToken(null);
        setUser(null);
        navigate("/login");
      }
    });
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"grid grid-cols-12 gap-8  " + " " + className}>
      <nav className=" col-span-10 my-4 px-8 shadow-custom rounded-full justify-between items-center backdrop-filter backdrop-blur-md bg-white bg-opacity-60 hover:bg-white transition-all hidden md:flex ">
        <Link to="/home">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 hover:scale-110 transition-all"
          />
        </Link>
        <div className="flex items-center justify-center font-medium  gap-8 h-12">
          {/* <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar scale-110"
            >
              <div className="w-8 rounded-full">
                <HiUserCircle className="w-full h-full" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 z-50 bg-white "
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <p onClick={logout}>Cerrar sesión</p>
              </li>
            </ul>
          </div> */}
          <Link
            className="hover:scale-105  hover:text-primary transition-all text-sm"
            to="/home"
          >
            {t("navbar.home")}
          </Link>
          <Link
            className="hover:scale-105 hover:text-primary transition-all text-sm"
            to="/events"
          >
            {t("navbar.eventsLink")}
          </Link>

          {token && (
            <Link
              className="hover:scale-105 hover:text-primary transition-all text-sm"
              to="/admin"
            >
              {t("navbar.admin")}
            </Link>
          )}
          {token ? (
            <Link
              onClick={logout}
              className="hover:scale-105 hover:text-primary transition-all text-sm"
            >
              {t("navbar.logout")}
            </Link>
          ) : (
            <Link
              className="hover:scale-105 hover:text-primary transition-all text-sm"
              to="/login"
            >
              {t("navbar.login")}
            </Link>
          )}
        </div>
      </nav>
      <SelectLanguage className="col-span-2 my-4 hidden md:flex" />
      {/* Movile menu */}
      <nav
        className={`col-span-12 py-2  px-[5%] flex justify-between transition-all bg-opacity-0  md:hidden ${
          isScrolled ? "bg-white bg-opacity-100 shadow-custom" : ""
        }`}
      >
        <Link to="/home" className="z-40">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </Link>
        <label className=" swap swap-rotate">
          <input
            type="checkbox"
            checked={openNav}
            onChange={(e) => setOpenNav(e.target.checked)}
          />
          <HiOutlineBars3BottomRight className="w-12 h-12 swap-off z-40 " />
          <HiOutlineXMark className="w-12 h-12 swap-on  z-40" />
        </label>
      </nav>
      <div
        className={`absolute w-full h-screen bg-white z-20 transition-all flex justify-center md:hidden ${
          openNav ? "opacity-100" : "opacity-0 -z-20 pointer-events-none "
        }`}
      >
        <ul className="font-roboto font-bold  gap-4 flex flex-col title3 w-full px-[5%] pt-[15vh]">
          <li className="hover:scale-110 hover:translate-x-4 transition-all active:scale-100">
            <Link to="/home">{t("navbar.home")}</Link>
          </li>
          <li className="hover:scale-110 hover:translate-x-4 transition-all active:scale-100">
            <Link to="/events">{t("navbar.eventsLink")}</Link>
          </li>
          {token ? (
            <li
              onClick={logout}
              className="hover:scale-110 hover:translate-x-4 transition-all active:scale-100"
            >
              {t("navbar.logout")}
            </li>
          ) : (
            <li className="hover:scale-110 hover:translate-x-4 transition-all active:scale-100">
              <Link to="/login">{t("navbar.login")}</Link>
            </li>
          )}
          {token && (
            <li className="hover:scale-110 hover:translate-x-4 transition-all active:scale-100">
              <Link to="/admin">{t("navbar.admin")}</Link>
            </li>
          )}
          <SelectLanguage className={"py-2 w-1/2 self-center my-8"} />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
