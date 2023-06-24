import { useContext } from "react"
import AuthContext from "../../../../context/AuthContext"
import Button from "../../commons/Button"
import { useTranslation } from "react-i18next";


export function EventCard({ event }) {

    const { t } = useTranslation("global");

    const { lenguage } = useContext(AuthContext)

    const lenguageLowerCase = lenguage.toLowerCase();
    const locationEvent = event.mode[lenguageLowerCase].isPresential === true ? event.mode[lenguageLowerCase].location : t("eventCard.online");
    const date = event?.startDate

    return (
        <article className=" min-w-[18rem] bg-white shadow-custom rounded-2xl overflow-hidden flex flex-col items-center h-auto">
            <div className="w-full">
                <img src="https://www.europasur.es/2022/09/13/lalinea/World-Cleanup-Day-Gran-Sur_1720038403_165979484_667x375.jpg" alt="cover event" className='w-full aspect-video' />
            </div>
            <div className="p-4 font-roboto w-full gap-4 flex flex-col items-start">

                <h3 className="font-roboto font-bold text-lg">{event?.title[lenguageLowerCase]}</h3>
                <h2 className='text-primary'>{t("eventCard.date")}:{event && date}</h2>
                <h2 className=' text-neutral-400 '>{event && locationEvent}</h2>
                <Button className=" self-end">View Event</Button>
            </div>
        </article>
    )
}
