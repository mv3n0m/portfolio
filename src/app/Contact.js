import React, { useEffect, useState } from 'react'
import ContactImage from 'assets/images/contact.png'
import useWindowDimensions from 'utils/windowDimensions'


function Contact() {
    const [ cc, setCC ] = useState("")
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ query, setQuery ] = useState("")
    const {width} = useWindowDimensions()


    useEffect(() => {
        setCC(width < 1300 ? "contact-col" : "contact-row")
    }, [width])

    const handleSubmit = event => {
        event.preventDefault();
        alert("Thank you for reaching out. Will get back to you soon!")
    }

    return (
        <div className={ `contact ${ cc } section` } id="contact">
            <form className='form' onSubmit={ handleSubmit }>
                <h2 className='section-title'>Ping Me</h2>
                <input className='name-input form-control' onChange={e => setName(e.target.value.trim())} placeholder="Name" />
                <input className='email-input form-control' type="email" onChange={e => setEmail(e.target.value.trim())} placeholder="Email" />
                <textarea className='query-input form-control' rows={ 5 } onChange={e => setQuery(e.target.value.trim())} placeholder="Query..." ></textarea>
                <button type="submit" className='submit btn shadow' disabled={ !name?.length || !email?.length || !query?.length }>Submit</button>
            </form>
            <img src={ ContactImage } width={ 400 } height={ 400 } />
        </div>
    )
}

export default Contact