import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faExternalLink} from "@fortawesome/free-solid-svg-icons"
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons"

function ProjectCard() {
  return (
    <div className="card has-background-black-ter mx-2">
        <div className="card-image">
            <figure className="image is-2by1">
                <img src="https://img.freepik.com/premium-vector/computer-science-lesson-programming-className-video-course-web-website-home-homepage-landing-template-banner-with-cartoon-flat-style_197170-375.jpg" alt="Placeholder" />
            </figure>
        </div>
        <div className="card-content">
            <div className="content has-text-white">
                <a className='has-text-danger has-text-weight-bold is-size-5 is-underlined' href="/">E-commerce</a>
                <br/>
                A project description is a high-level overview of why you're doing a project. 
                <div className='has-text-danger mt-3'>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="reply" href='/'>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faSquareGithub}/>
                                </span>
                            </a>
                            <a className="level-item" href='/'>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faExternalLink}/>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard