import React from 'react'
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg'


function Footer({ darkMode }) {
    return (
        <div className='footer'>
            <div>
                <h2>Manish Roy</h2>
                <h4>© All rights reserved. | { new Date().getFullYear() }</h4>
            </div>
            <div>
                <a href="https://twitter.com/mbajaj74" target="_blank">
                    <Twitter fill={ `#${ darkMode ? "212121" : "eeeeee" }` } />
                </a>
            </div>
        </div>
    )
}

export default Footer