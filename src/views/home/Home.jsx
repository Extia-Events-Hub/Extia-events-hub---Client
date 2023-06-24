import React from 'react'
import Navbar from '../../components/ui/navbar/Navbar'
import { useTranslation } from 'react-i18next'
import calendar_image from '../../assets/images/calendar_image_3d.png'
import { EventCard } from '../../components/ui/cards/eventCard/EventCard'
import eventsData from '../../utilities/eventsData.json'
import Footer from '../../components/ui/footer/Footer'
import { Link } from 'react-router-dom'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

function Home() {
    const { t } = useTranslation("global");

    return (
        <>
            <Navbar className="fixed w-full  md:px-[10%] z-30" />
            <div className='w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-8'>
                {/* Header */}
                <div className="w-full h-[70vh]  flex gap-8 md:flex-row md:justify-center items-center  ">
                    <div className="w-full flex flex-col-reverse gap-24 md:flex-row ">
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <h2 className="title1 font-mulish">{t("home.titleEventsHub")}</h2>
                            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam blanditiis voluptatum id aut cumque eveniet, debitis dolore est sint quod porro eos a unde. Sapiente id sunt alias? Culpa!</p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center  relative">
                            <div className='w-4/5 aspect-square rounded-full absolute bg-primary opacity-30 shadow-custom'></div>
                            <img src={calendar_image} className=' max-w-xs md:max-w-full drop-shadow-2xl' alt='calendar_image'></img>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-24 md:p-0  flex flex-col gap-8">
                    <span className=' font-mulish text-6xl -mt-[2rem] md:text-8xl  md:-mt-[3rem] -translate-x-3 md:-translate-x-5 opacity-5 absolute'>
                        {t("home.events")}
                    </span>
                    <h2 className='title1   '>{t("home.events")}</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventsData?.map((event,index) => {
                            return <EventCard key={index} event={event} />
                        })}
                    </div>
                    <span className='w-full flex justify-center pt-8'>
                        <Link className='font-mulish text-2xl text-primary underline underline-offset-4 animate-bounce flex gap-4' to="/events">
                            {t("home.moreEvents")} <HiArrowRight className='translate-y-1'/>
                        </Link>
                    </span>
                </div>
                <div className="w-full pt-24 flex flex-col gap-8 ">
                    <span className=' font-mulish w-[90%] text-6xl -mt-[2rem] md:text-8xl  md:-mt-[3rem] -translate-x-3 md:-translate-x-5 opacity-5 absolute overflow-hidden'>
                        {t("home.collaborators")}
                    </span>
                    <h2 className='title1   '>{t("home.collaborators")}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {eventsData?.map((event,index) => {
                            return <div key={index} className="shadow-custom rounded-2xl p-4 flex justify-center items-center">
                                *Colaborador*
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Footer className="mt-24" />
        </>

    )
}

export default Home