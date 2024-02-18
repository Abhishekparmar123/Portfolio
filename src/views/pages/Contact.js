import React from 'react'
import {faUser, faLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons"

import ContactItem from '../../components/contact/ContactItem'
import Navbar from '../../components/navbar/Navbar'

function Contact() {
  return (
    <div className='home-main'>
      <Navbar/>
      <section className="container contact">
        <div className="title">Contact Me</div>
        <div className="columns mx-0 mt-6">
          <div className="column">
            <div className="content">
              <h2 className='has-text-white is-size-5'>Get in Touch</h2>
              <p className='is-text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. 
                Doloribus quis soluta nesciunt veritatis vitae nobis?
              </p>
              <div className="pt-5">
                <ContactItem icon={faUser} title="Name" subTitle="Abhishek Parmar"/>
                <ContactItem icon={faLocationDot} title="Address" subTitle="Bhopal, India"/>
                <ContactItem icon={faEnvelope} title="Email" subTitle="abhishekparmarjnv@gmail.com" email={true}/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <h2 className="has-text-white is-size-5">Message me</h2>
              <div>
                <form>
                  <div className='columns'>
                    <div className='column'>
                      <label className='has-text-danger'>Name</label>
                      <input className="input is-danger has-background-black-bis has-text-white" type="text" placeholder="Name" />
                    </div>
                    <div className='column'>
                      <label className='has-text-danger'>Email</label>
                      <input className="input is-danger has-background-black-bis has-text-white" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <label className='has-text-danger'>Subject</label>
                      <input className="input is-danger has-background-black-bis has-text-white" type="text" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <label className='has-text-danger'>Message</label>
                      <textarea className="textarea is-danger has-background-black-bis has-text-white" placeholder="e.g. Hello, I have a query"></textarea>
                    </div>
                  </div>
                  <button type='submit' class="button is-danger is-hovered">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact