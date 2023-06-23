import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/ui/navbar/Navbar'

function Home() {
    
    return (
        <div className='w-full px-[5%] md:px-[10%]  min-h-screen'>
            <Navbar/>
        </div>
    )
}

export default Home