import React, { useState } from 'react'
import Header from './Header';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <ThemeContext value={{darkTheme, setDarkTheme}}>

            <div className={`px-20 h-screen ${darkTheme && 'bg-gray-900'} transition-all duration-200`}>
                <Header/>
            </div>

        </ThemeContext>
    )
}

export default ThemeSwitcher