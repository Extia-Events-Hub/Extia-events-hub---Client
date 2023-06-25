import React from 'react'
import Navbar from '../../components/ui/navbar/Navbar'
import Footer from '../../components/ui/footer/Footer'
import { Link } from 'react-router-dom'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import Button from '../../components/ui/commons/Button'

function AdminView() {
    return (
        <>
            <Navbar className="fixed w-full  md:px-[10%] z-30" />
            <div className='w-full px-[5%] md:px-[10%] pt-[15vh] flex flex-col relative min-h-screen gap-16'>
                <div className="flex title2 gap-4">
                    <h1>View estatistics of Events   or</h1>
                    <Link className='underline text-primary'>create new event</Link>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8 min-h-[60vh] ">
                    <div className="w-full  md:h-[65vh]  md:w-1/2 flex flex-col gap-4">
                        <span className='input flex rounded-full justify-between shadow-custom w-full '>
                            <input type="text" placeholder='SearchBar' className="w-full focus:no-underline focus:ring-0" />
                            <HiOutlineMagnifyingGlass className='btn btn-circle btn-ghost h-8 w-8' />
                        </span>
                        <div className="w-full   rounded-2xl shadow-custom p-4">
                            <div className="w-full  flex items-center font-roboto justify-between">
                                <h3 className='text-lg font-bold'>Events list</h3>
                                <h3 className='text-lg font-bold'>Order By:<span className=' font-normal pl-2'> Recent</span></h3>
                            </div>
                            <span className="divider"></span>
                            <ul className="flex grow h-[80%]  flex-col  overflow-y-auto">
                                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                                    <span className='flex flex-col'>
                                        <h3 className='text-lg font-bold'>Event title</h3>
                                        <p>Description</p>
                                    </span>
                                    <Button>View Event</Button>
                                </li>
                                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                                    <span className='flex flex-col'>
                                        <h3 className='text-lg font-bold'>Event title</h3>
                                        <p>Description</p>
                                    </span>
                                    <Button>View Event</Button>
                                </li>
                                <li className="w-full flex p-4 hover:bg-gray-100 cursor-pointer justify-between">
                                    <span className='flex flex-col'>
                                        <h3 className='text-lg font-bold'>Event title</h3>
                                        <p>Description</p>
                                    </span>
                                    <Button>View Event</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full  md:h-[65vh]  md:w-1/2 rounded-2xl shadow-custom p-4">
                        <span className='flex justify-between items-center'>
                            <h2 className='title3'>Event title</h2>
                            <Link className='text-primary underline'>View detailed event</Link>
                        </span>
                        <span className='divider'></span>
                        <p className='font-roboto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum enim tenetur cumque saepe, quasi rem dolore officiis aperiam sequi consequuntur autem architecto veritatis sed reprehenderit doloremque. Provident molestiae doloremque pariatur.</p>
                        <h2 className='title3 mt-4'>Participants</h2>
                        <span className="divider"></span>
                        <ul className='flex flex-col h-[40%] overflow-y-auto'>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                            <li className='flex justify-between p-4'>
                                <p>Participant</p>
                                <p>Email participant</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminView