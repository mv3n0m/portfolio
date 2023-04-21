import React, { useEffect, useState } from 'react'
import Sun from 'assets/icons/sun.svg'
import Moon from 'assets/icons/moon.svg'
import Header from './Header'
import Cloud from './Cloud'
import AboutMe from './AboutMe'
import Experience from './Experience'


function Page() {
    const [ toggled, setToggled ] = useState(localStorage.getItem("darkMode") || false)
    const theme = toggled ? "dark" : "light"
    const icon = toggled ? Sun : Moon

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        toggled ? localStorage.setItem("darkMode", true) : localStorage.removeItem("darkMode")
    }, [ toggled ])

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return (
        <div className='page'>
            <img src={ icon } onClick={ handleToggle } className="pointer toggle" width={ 25 } />
            <Header />
            <Cloud darkMode={ toggled } />
            <AboutMe />
            <Experience />
        </div>
    )
}

export default Page