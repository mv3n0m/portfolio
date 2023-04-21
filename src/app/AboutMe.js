import React from 'react'
import Profile from 'assets/images/profile.png'


function AboutMe() {
    return (
        <div className='about-me'>
            <img src={ Profile } width={ 300 } className='profile' />
            <div className='section'>
                <h2>About Me</h2>
                <b>Experienced Fullstack Developer with a demonstrated history of working in Python-based Web Development. Skilled in Python, Flask, Django, JavaScript, Reactjs, MongoDB and Shell Scripting. A constant learner, who wishes to get into any depths of learning new technologies and embracing them with open arms. Currently, dabbling around in the Web3 space.</b>
            </div>
        </div>
    )
}

export default AboutMe