import React from 'react'
import FormLogin from '../../components/forms/auth/FormLogin'
import ToggleDarkMode from '../../components/toggleDarkMode/ToggleDarkMode'

function Login() {
    return (
        <div className='w-full px-[5%] md:px-[10%] grid md:grid-cols-2 py-[10vh] min-h-screen '>
            <FormLogin className='rounded-2xl md:rounded-r-none justify-center lg:px-16' />
            <div className=" bg-base-100 rounded-r-2xl shadow-custom hidden relative md:flex md:flex-col">
                {/* Logo */}
            </div>
        </div>
    )
}

export default Login