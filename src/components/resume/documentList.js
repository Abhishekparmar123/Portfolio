import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

function DocumentItem(props) {
    return ( 
        <div className='is-flex is-flex-direction-row'>
            <div className='iconSize-1'>
                <FontAwesomeIcon icon={faCheckCircle} className="has-text-danger is-size-5 mt-1"/>
            </div>
            <div className="">
                <div className='has-text-white is-capitalized'>{props.title}</div>
            </div>
        </div>
    )
}

export default DocumentItem;