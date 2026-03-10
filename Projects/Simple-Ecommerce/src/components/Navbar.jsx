import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
        {/* Logo */}
        <Link to='/' className='text-3xl'>
            Shop
            <span className='text-blue-600 font-extrabold'>
                Hub
            </span>
        </Link>

        <div className='flex items-center gap-10'>
            {/* Links */}
            <div className='flex items-center gap-6'>
                <a href="">Home</a>
                <a href="">Checkout</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

            {/* Buttons */}
            <div className='flex items-center gap-2'>
                <Link to='/auth'
                className='bg-gray-600 text-white px-2 py-1 rounded cursor-pointer'>
                    LogIn
                </Link>
                <Link to='/auth'
                className='bg-blue-600 text-white px-2 py-1 rounded cursor-pointer'>
                    Sign Up
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar