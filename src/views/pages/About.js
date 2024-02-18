import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import profile from "../../assets/home/home-image.jpg"
import TextAnimation from '../../components/home/textAnimation'

function About() {
  return (
    <div className='home-main'>
        <Navbar/>
        <section className="about container">
          <div className="title">About Me</div>
          <div className="columns mx-0">
            <div className="column is-two-fifths is-flex is-justify-content-center">
              <figure className="image">
                <img id='profile' src={ profile } alt='error' />
              </figure>
            </div>
            <div className="column is-flex is-align-items-center">
              <div className="content">
                <h2 className='has-text-white is-size-5 mb-4'>I'm Abhishek parmar and I'm a <TextAnimation list = {["Web Developer... ", 2000,"Java Developer... ", 2000, "MERN Developer... ", 2000 ]}/></h2>
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
          </div>
        </section>
    </div>
  )
}

export default About