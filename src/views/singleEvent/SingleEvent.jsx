import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/ui/navbar/Navbar';
import Footer from '../../components/ui/footer/Footer';
import { HiCalendarDays } from 'react-icons/hi2';
import Button from '../../components/ui/commons/Button';
import { useTranslation } from 'react-i18next';

function SingleEvent() {

  const { id } = useParams();

  const {t} = useTranslation("global")


  return (
    <>
      <Navbar className="fixed w-full  md:px-[10%] z-30" />
      <div className='w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-8'>
        <div className="aspect-video md:aspect-[4/1] w-full rounded-2xl bg-white shadow-custom overflow-hidden">
          <img src="https://www.timejust.es/wp-content/uploads/2021/03/eventos.jpg" alt="banner_event" className='w-full h-full  object-cover' />
        </div>
        <div className="w-full h-full  flex gap-8">
          <div className=" w-full md:w-1/2 flex pb-12  flex-col gap-4">

            <h2 className='title2'>Title event largo largo largo </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit, vero qui minima excepturi earum laudantium numquam animi culpa aliquid unde enim ea eaque eum ducimus maxime nam suscipit. Laborum?</p>
            <span className='divider'></span>

            <h2 className='title2'>{t("singleEvent.whereAndWhen")} </h2>
            <div className="w-full rounded-2xl shadow-custom flex p-4 justify-between">
              <div className="w-1/2 flex flex-col items-center">
                <HiCalendarDays className='w-16 h-16 md:w-20 md:h-20 aspect-square' />
                <p className='text-md font-roboto'>Time</p>
              </div>
              <span className="divider divider-horizontal"></span>
              <div className="w-1/2 flex flex-col items-center">
                <HiCalendarDays className='w-16 h-16 md:w-20 md:h-20 aspect-square' />
                <p className='text-md font-roboto'>Place</p>
              </div>
            </div>

            <span className="divider"></span>

            <h2 className='title2'>{t("singleEvent.aboutTheEvent")}</h2>
            <div className="flex flex-col gap-4 font-roboto">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, non harum rerum laborum tempore aliquid dolor ex, voluptates suscipit, voluptatibus id unde perspiciatis possimus ut amet? Eligendi fuga ducimus repudiandae?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto fugiat minima. Aspernatur sequi laborum laboriosam rerum quibusdam nostrum ipsa, nisi ipsum delectus dignissimos veritatis consectetur temporibus ducimus obcaecati quis.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto fugiat minima. Aspernatur sequi laborum laboriosam rerum quibusdam nostrum ipsa, nisi ipsum delectus dignissimos veritatis consectetur temporibus ducimus obcaecati quis.</p>
            </div>

          </div>
          <div className=" w-full hidden md:block md:w-1/2  min-h-screen ">
            <form className="sticky top-[12vh] p-4 rounded-2xl shadow-custom flex flex-col gap-4 bg-white ">
              <h2 className='title3 font-semibold font-mulish'>{t("singleEvent.register")}</h2>
              <label className='bold flex flex-col'>{t("singleEvent.name")}
                <input required type="text" className='input input-bordered' placeholder={t("singleEvent.name")} />
              </label>
              <label className='bold flex flex-col'>{t("singleEvent.email")}
                <input required type="text" className='input input-bordered' placeholder={t("singleEvent.email")} />
              </label>
              <Button>{t("singleEvent.getMyTicket")}</Button>
            </form>
          </div>
        </div>
      </div>


      <div className="w-full shadow-custom z-20  bg-white fixed px-4 flex flex-col gap-4 bottom-0 font-roboto md:hidden">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title ">
            <h2 className='title2 font-mulish'>{t("singleEvent.register")}</h2>
          </div>
          <form className="collapse-content flex flex-col gap-4 bg-white ">
            <label className='bold flex flex-col'>{t("singleEvent.name")}
              <input required type="text" className='input input-bordered' placeholder={t("singleEvent.name")} />
            </label>
            <label className='bold flex flex-col'>{t("singleEvent.email")}
              <input required type="text" className='input input-bordered' placeholder={t("singleEvent.email")}/>
            </label>
            <Button>{t("singleEvent.getMyTicket")}</Button>
          </form>
        </div>
      </div>
      <Footer className="pb-28"/>
    </>
  )
}

export default SingleEvent