import React, { useEffect, useRef } from 'react'
import HeaderImage from 'assets/images/header.png'
import Github from 'assets/icons/github.svg'
import Linkedin from 'assets/icons/linkedin.svg'
import Pph from 'assets/icons/pph.svg'
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
            <div>
                <h1>¡Hola!</h1>
                <h2 className='title'>I'm <span className='name'> Manish Roy</span></h2>
                <h2 className='typed'>. . . a <span ref={ el }></span></h2>
                <div className='btns'>
                    <button className='hire-me btn shadow'>Hire Me!</button>
                    <button className='view-cv btn shadow'>View CV</button>
                </div>
                <div className='actions'>
                    <a href="https://www.linkedin.com/in/m-vidali-espisato" target="_blank">
                        <img src={ Linkedin } width={ 30 } className="gt" />
                    </a>
                    <a href="https://github.com/Vidali-Espisato" target="_blank">
                        <img src={ Github } width={ 30 } className="gt" />
                    </a>
                    <a href="https://www.peopleperhour.com/freelancer/technology-programming/manish-roy-python-web-developer-xxnwxwa#reviews" target="_blank">
                        <img src={ Pph } height={ 30 } className="lt"/>
                    </a>
                </div>
            </div>
            <img src={ HeaderImage } width={ 400 } />
        </div>
    )
}

export default Header