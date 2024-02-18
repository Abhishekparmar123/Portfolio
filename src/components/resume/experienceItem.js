import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from "@fortawesome/free-solid-svg-icons"

function ExperienceItem(props) {
  return (
    <div className='mt-3 is-flex is-flex-direction-row'>
      <div style={{width:30, marginTop:5}}>
        <FontAwesomeIcon icon={faCircle} className="has-text-danger"/>
      </div>
      <div>
        <h2 className='has-text-weight-medium is-size-5 has-text-danger'>{props.position}</h2>
        <div className='is-flex is-justify-content-space-between' style={{width:"100%"}}>
          <p className='has-text-weight-medium'>{props.employer}</p>
          <p className='has-text-weight-medium'>{props.date}</p>
        </div>
        <div className='mt-3'>
          <p>
            {props.details}
          </p>
          <ul>
            {
              props.list.map((element, index) => {
                return <li key={index=element}>{element}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem;