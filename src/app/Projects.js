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
        <div className='projects-section section'>
            { projects?.length ? <h2 className='section-title'>Projects</h2> : <></>}
            <div className='projects'>
                {
                    projects.map(project => (
                        <div className='project pointer shadow' onClick={() => handleClick(project.id)}>
                            <a href={ project.url } id={ `project-${ project.id }` } target="_blank" rel="noreferrer" />
                            <h3>{ project.name }</h3>
                            <h5>{ project.description.split("Technologies used")[0] }</h5>
                            <h5><i>Technologies used{ project.description.split("Technologies used")[1] }</i></h5>
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