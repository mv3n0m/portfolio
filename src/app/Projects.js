import React, { useEffect, useState } from 'react'
import Request from 'services/Request'


function Projects() {
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        (async () => {
            const { statusCode, jsonResponse } = await Request("/fetch-projects")
            if (statusCode !== 200) return

            setProjects(jsonResponse.data)
        })()
    }, [])

    const handleClick = (id) => {
        const a = document.querySelector(`#project-${ id }`)
        a.click()
    }


    return (
        <div className='projects-section'>
            { projects?.length ? <h2>Projects</h2> : <></>}
            <div className='projects'>
                {
                    projects.map(project => (
                        <div className='project pointer shadow' onClick={() => handleClick(project.id)}>
                            <a href={ project.url } id={ `project-${ project.id }` } target="_blank" />
                            <h3>{ project.name }</h3>
                            <h5>{ project.description }</h5>
                            <div className='topics'>
                                {
                                    project.topics?.map(topic => (
                                        <div className='topic'>
                                            { topic }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects