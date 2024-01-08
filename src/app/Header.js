import React, { useEffect, useRef, useState } from 'react'
import { FaLinkedinIn, FaGithubAlt, FaXTwitter } from "react-icons/fa6";
import Typed from "typed.js";
import Cloud from './Cloud'


function Header({darkMode}) {
    const el = useRef(null);
    const [ parentD, setParentD ] = useState("row")

    const typingStrings = ["Fullstack Engineer", "Learner", "Web3 Security Researcher", "Web/3 Developer", "Generalist", "Software Engineer"]

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: typingStrings,
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 500
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleHire = () => {
        const scrollTo = document.querySelector("#contact")
        scrollTo.scrollIntoView({behavior: "smooth"})
    }

    const handleCV = () => {
        const resume = document.querySelector("#resume")
        resume.click()
    }

    return (
        <div className={ `header header-${parentD}` }>
            <div className='hero'>
                <h1>¡Hola!</h1>
                <h2 className='title'>I'm <span className='name'> Manish Roy</span></h2>
                <h2 className='typed'>. . a <span ref={ el }></span></h2>
                <div className='btns'>
                    <button className='hire-me btn shadow' onClick={ handleHire }>Hire Me!</button>
                    <button className='view-cv btn shadow' onClick={ handleCV }>View CV<a href="https://manish-roy.s3.ap-south-1.amazonaws.com/Manish+Roy+-+Resume.pdf" id="resume" target="_blank" rel="noreferrer"/></button>
                </div>
                <div className='actions'>
                    <a href="https://www.linkedin.com/in/mv3n0m" target="_blank" rel="noreferrer">
                        <FaLinkedinIn size="30" className="gt" />
                    </a>
                    <a href="https://github.com/mv3n0m" target="_blank" rel="noreferrer">
                        <FaGithubAlt size="30" className="gt" />
                    </a>
                    <a href="https://twitter.com/mv3n0m_" target="_blank" rel="noreferrer">
                        <FaXTwitter size="30" className="gt" />
                    </a>
                </div>
            </div>
            <Cloud darkMode={ darkMode } setParentD={ setParentD } />
        </div>
    )
}

export default Header