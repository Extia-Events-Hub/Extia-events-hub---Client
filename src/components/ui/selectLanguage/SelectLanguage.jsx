import { useContext, useState } from "react"
import AuthContext from "../../../context/AuthContext"

function SelectLanguage({ className }) {
    const [openLenguages, setOpenLenguages] = useState(false)
    const { lenguage, setLenguage } = useContext(AuthContext)

    return (
        <div className={'w-full shadow-custom flex justify-center items-center rounded-full backdrop-filter backdrop-blur-sm relative hover:bg-white ' + className}>


            <span className="font-bold w-full h-full flex justify-center items-center cursor-pointer select-none" onClick={() => setOpenLenguages(!openLenguages )}>Lenguage: {lenguage && lenguage}</span>

            <ul tabIndex={0} className={openLenguages ?"shadow-custom rounded-2xl p-4 absolute w-full top-0 mt-16" :"hidden" }>
                <li className="flex justify-center" onClick={() => { setLenguage("ES"); setOpenLenguages(false) }}>ES</li>
                <li className="flex justify-center" onClick={() => { setLenguage("EN"); setOpenLenguages(false) }}>EN</li>
                <li className="flex justify-center" onClick={() => { setLenguage("FR"); setOpenLenguages(false) }}>FR</li>
            </ul>
        </div>
    )
}

export default SelectLanguage