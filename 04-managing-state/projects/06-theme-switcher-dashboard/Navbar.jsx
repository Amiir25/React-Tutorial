import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {

    const {darkTheme , setDarkTheme} = useContext(ThemeContext);

    return (
        <nav className={`flex items-center justify-between py-4
        ${darkTheme && 'text-white'} transition-all duration-200`}>
            {/* Logo */}
            <p className='text-xl font-light'>
                lo
                <span className='font-bold text-green-700 text-5xl'>
                    go
                </span>
            </p>

            <div className='flex items-center gap-10'>
                {/* Theme toggle */}
                <div
                onClick={() => setDarkTheme(prev => !prev)}
                className={`border border-gray-500 w-12 h-6 rounded-full flex items-center
                ${darkTheme && "justify-end"} transition-all duration-200 cursor-pointer`}>

                    <div className={`w-6 h-6 rounded-full
                    ${darkTheme ? "bg-gray-200" : "bg-gray-900"} transition-all duration-200`}></div>

                </div>

                {/* Nav links */}
                <div className='flex items-center gap-6'>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar