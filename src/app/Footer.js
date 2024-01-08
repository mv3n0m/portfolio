import React from 'react'
import Pph from 'assets/icons/pph.svg'


function Footer({ darkMode }) {
    return (
        <div className='footer'>
            <div>
                <h2>Manish Roy</h2>
                <h4>© All rights reserved. | { new Date().getFullYear() }</h4>
            </div>
            <div>
                <a href="https://www.peopleperhour.com/freelancer/technology-programming/manish-roy-python-web-developer-xxnwxwa#reviews" target="_blank" rel="noreferrer">
                    <img src={ Pph } height={ 30 } className="lt"/>
                </a>
            </div>
        </div>
    )
}

export default Footer