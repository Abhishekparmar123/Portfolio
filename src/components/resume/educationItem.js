import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from "@fortawesome/free-solid-svg-icons"

function EducationItem(props) {
  return (
    <div className='mt-3 is-flex is-justify-content-space-between'>
        <div className='is-flex is-flex-direction-row'>
            <div className='iconSize-1 mt-2'>
                <FontAwesomeIcon icon={faCircle} className="has-text-danger"/>
            </div>
            <div>
                <h2 className='has-text-weight-medium is-size-5 has-text-danger is-uppercase'>{props.degree||"BACHELOR OF ENGINEERING"}</h2>
                <p className='has-text-weight-medium'>{props.organizationName||"University institute of technology, Bhopal University(M.P)"}</p>
            </div>
        </div>
        <div className='has-text-right'>
            <p className='has-text-weight-medium'>{props.date||"06/08/2018-31/07/2022"}</p>
        </div>
    </div>
  )
}

export default EducationItem