import React, { useEffect, useRef } from 'react'
import HeaderImage from 'assets/images/header.png'
import Github from 'assets/icons/github.svg'
import Linkedin from 'assets/icons/linkedin.svg'
import Typed from "typed.js";


function Header() {
    const el = useRef(null);

    const typingStrings = ["Fullstack Engineer", "Web3 Developer", "Freelancer", "Learner", "Generalist", "Problem Solver", "Critical Thinker", "Software Engineer"]


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


    return (
        <div className='header'>
            <div className='hero'>
                <h1>¡Hola!</h1>
                <h2 className='title'>I'm <span className='name'> Manish Roy</span></h2>
                <h2 className='typed'>. . . a <span ref={ el }></span></h2>
                <div className='btns'>
                    <button className='hire-me btn'>Hire Me!</button>
                    <button className='view-cv btn'>View CV</button>
                </div>
                <div className='actions'>
                    <img src={ Linkedin } width={ 30 } />
                    <img src={ Github } width={ 30 } className="gt" />
                </div>
            </div>
            <img src={ HeaderImage } width={ 400 } />
        </div>
    )
}

export default Header