import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function ContactItem(props) {
    return (
        <div className='is-flex is-flex-direction-row py-3'>
            <div className='iconSize-1'>
                <FontAwesomeIcon icon={props.icon} className="has-text-danger is-size-4 my-auto"/>
            </div>
            <div className="ml-3">
                <div>{props.title}</div>
                {
                    !props.email ?
                        <div>{props.subTitle}</div>
                        :
                        <div>
                            <a href={`mailto:${props.subTitle}`} className="has-text-danger">{props.subTitle}</a>
                        </div> 
                }
            </div>
        </div>
    )
}

export default ContactItem