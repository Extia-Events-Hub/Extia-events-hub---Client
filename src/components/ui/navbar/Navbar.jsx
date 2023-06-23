import React, { useContext, useState } from 'react'
import { HiOutlineBars3BottomRight, HiUserCircle } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import AuthContext from '../../../context/AuthContext';
import SelectLanguage from '../selectLanguage/SelectLanguage';

function Navbar() {
    const navigate = useNavigate();
    const { setUser, setToken } = useContext(AuthContext);

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

    return (
        <div className="grid grid-cols-12 gap-8 py-8 ">
            <nav className=" col-span-10 flex   px-8 shadow-custom rounded-full justify-between items-center backdrop-filter backdrop-blur-sm hover:bg-white transition-all hidden md:flex ">
                <Link to="/home"><span className='hover:scale-105 active:scale-100 roboto  font-bold transition-all'>Extia events hub</span></Link>
                <div className="flex-none gap-4 ">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar scale-110">
                            <div className="w-8 rounded-full">
                                <HiUserCircle className='w-full h-full' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 z-50">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><p onClick={logout}>Cerrar sesión</p></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SelectLanguage className="col-span-2"/>
            {/* Movile menu */}
            <nav className="col-span-12 flex justify-between md:hidden">
                <img src="" alt="Logo" className='w-12 h-12' />
                <HiOutlineBars3BottomRight className='w-12 h-12' />
            </nav>
        </div>
    )
}

export default Navbar