import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Hero = () => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <section className={`flex flex-col items-center justify-center gap-4 h-[70vh]
        ${darkTheme && "text-white"}`}>
            <h1 className='text-9xl font-bold'>
                Main Title
            </h1>
            <h2 className='text-5xl font-semibold'>
                Sub Title
            </h2>
            <p className='w-200 mt-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus non earum
                consectetur praesentium labore ut ducimus sed explicabo? Dolorem veniam cupiditate iusto
                velit est totam sint voluptatibus aspernatur quam!
            </p>
        </section>
    )
}

export default Hero