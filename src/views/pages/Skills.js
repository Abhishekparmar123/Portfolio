import React from 'react'
import ProgressBar from '../../components/about/ProgressBar'
import Navbar from '../../components/navbar/Navbar'

function Skills() {
  return (
    <div className='home-main '>
      <Navbar/>
      <section className="skills container">
        <div className="title">My Skills</div>
        <div className="columns mx-0">
            <div className="column is-flex is-align-items-center">
              <div className="content">
                <h2 className='has-text-white is-size-5 mb-4'>My creative skills & experiences.</h2>
                <p className='is-text-justify'>
                  In summer 2022 I graduated with a bachelor's degree in computer science from Barkatullah University.
                  Modulus studied during my degree include object oriented programming systems & architecture, software 
                  engineering management, operating systems, artificial intelligence, UX design and website developer 
                  using react js. Having secured a first-class degree. I am now eager to secure roles that demand and 
                  build new relationships. So feel free to send me a message.
                </p>
                <button className="button is-danger is-hovered">Know More</button>
              </div>  
            </div>
            <div className="column">
              <div className="content my-6">
                <ProgressBar language="HTML & CSS" percentage={90}/>
                <ProgressBar language="JavaScript" percentage={80}/>
                <ProgressBar language="MySQL" percentage={85}/>
                <ProgressBar language="Python" percentage={80}/>
                <ProgressBar language="React js" percentage={90}/>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Skills