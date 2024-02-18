import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProjectCard from '../../components/projects/projectCard'

function Projects() {
  return (
    <div className='home-main '>
      <Navbar/>
      <section className="container projects">
        <div className="title">My Projects</div>
        <div className='my-6'>
          <div className="columns is-multiline">
            <div className="column is-one-fourth">
              <ProjectCard/>
            </div>
            <div className="column is-one-fourth">
              <ProjectCard/>
            </div>
            <div className="column is-one-fourth">
              <ProjectCard/>
            </div>
            <div className="column is-one-fourth">
              <ProjectCard/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects