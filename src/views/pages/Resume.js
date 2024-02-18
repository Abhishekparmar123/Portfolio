import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import resumeImage from "../../assets/home/home-image.jpg"
import Title from '../../components/resume/Title'

import { faUser, faCalendar, faEarthAsia, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import PersonalDetail from '../../components/resume/PersonalDetail'
import ContactItem from '../../components/resume/ContactItem'
import EducationItem from '../../components/resume/educationItem'
import { educationData } from '../../store/education'
import { experienceData } from '../../store/experience'
import ExperienceItem from '../../components/resume/experienceItem'
import ProgressBar from '../../components/about/ProgressBar'
import { skillsData } from '../../store/skill'
import { projects, training } from '../../store/documents'
import DocumentItem from '../../components/resume/documentList'
import { contactData } from '../../store/contact'

function Resume() {
  return (
    <div className='home-main'>
      <Navbar/>
      <section className="container resume px-3">
        <div className="title">My Resume</div>
        <div className='has-text-white my-6'>
          <div className="columns">
            <div className="column is-flex is-justify-content-center">
              <figure className="image">
                <img id='img-rounded' src={resumeImage} alt='error' />
              </figure>
            </div>
            <div className="column is-three-quarters is-flex is-align-items-center">
              <div>
                <h2 className='text-2 has-text-weight-600 has-text-danger'>Abhishek Parmar</h2>
                <p className='has-text-weight-medium mt-3 is-size-4'>COMPUTER SCIENCE ENGINEERING, BE UIT BHOPAL MP</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className='my-5'>
                <Title title="PROFILE" icon={faUser} />
                <p className='mt-3 is-text-justify'>
                  An ambitious problem solver with a passion for online businesses and who would like to join like-minded developers. 
                  I am thorough and precise in everything and have a keen interest in technology and mobile application, plus user experience.
                </p>
              </div>
              <div className='mt-6'>
                <p className='has-text-weight-medium mt-3 is-size-4'>PERSONAL DETAILS</p>
                <div className='pt-3'>
                  <PersonalDetail title="Birth Date" subTitle="03/02/2002" icon={faCalendar}/>
                  <PersonalDetail title="Nationality" subTitle="indian" icon={faEarthAsia}/>
                  <PersonalDetail title="Address" subTitle="V+P-Satrana, Block-Nasrullaganj, Distt-Sehore M.P. ( 466331 )" icon={faLocationDot}/>
                </div>
              </div>
              <div className='mt-6'>
                <p className='has-text-weight-medium mt-3 is-size-4'>CONTACT</p>
                <div className='pt-3'>
                 {
                  contactData.map(contact =>{
                    return <ContactItem key={contact.id} title={contact.title} url={contact.url} icon={contact.icon}/>
                  })
                 }
                </div>
              </div>
            </div>
            <div className="column is-three-quarters">
              <p className='has-text-weight-medium mt-5 is-size-4'>WORK EXPERIENCE</p>
              {
                experienceData.map(element =>{
                  return <ExperienceItem
                    key={element.id} 
                    position={element.position}
                    employer={element.employer}
                    date={`${element.joinDate} - ${element.leaveDate}`}
                    details={element.details}
                    list={element.key}
                  />
                })
              }
              <p className='has-text-weight-medium mt-5 is-size-4'>EDUCATION</p>
              <div>
                {
                  educationData.map((element, index) => {
                    return <EducationItem 
                      key={index} 
                      degree={element.degree} 
                      organizationName={element.organizationName} 
                      date={`${element.joinDate} - ${element.leaveDate}`}/>
                  })
                }
              </div>
              <p className='has-text-weight-medium mt-5 is-size-4'>SKILLS</p>
              <div className="columns is-multiline is-3 mt-3">
                {
                  skillsData.map(element =>{
                    return(
                      <div key={element.id}  className="column is-half">
                        <ProgressBar 
                          key={element.id} 
                          language={element.skill} 
                          percentage={element.percentage}
                          py={1}
                        />
                      </div>
                    )
                  })
                }
              </div>
              <div className="columns mt-3">
                <div className="column is-half">
                  <p className='has-text-weight-medium mt-5 is-size-4'>TRAINING</p>
                  <div className="columns is-multiline is-3 mt-3">
                    {
                      training.map((element, index) =>{
                        return(
                          <div key={index} className="column is-full py-2">
                            <DocumentItem title={element}/>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="column is-half">
                <p className='has-text-weight-medium mt-5 is-size-4'>Projects</p>
                  <div className="columns is-multiline is-3 mt-3">
                    {
                      projects.map((element, index) =>{
                        return(
                          <div key={index} className="column is-full py-2">
                            <DocumentItem title={element}/>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume