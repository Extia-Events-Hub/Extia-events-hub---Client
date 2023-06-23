import React from 'react'
import FormRegister from '../../components/forms/auth/FormRegister'
import ToggleDarkMode from '../../components/toggleDarkMode/ToggleDarkMode'

function Register() {
    return (
        <div className='w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen '>
            <FormRegister className='rounded-2xl  md:rounded-r-none justify-center lg:px-16' />
            <div className=" bg-base-100 rounded-r-2xl shadow-custom hidden relative md:flex md:flex-col">
                {/* Logo */}
            </div>
        </div>
    )
}

export default Register