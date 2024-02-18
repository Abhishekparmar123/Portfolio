import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactItem(props) {
    return (
        <a className={"is-flex is-flex-direction-row mb-2"} href={props.url} target="blank">
            <div className='iconSize-1'>
                <FontAwesomeIcon icon={props.icon} className="is-size-5 mt-1 has-text-danger"/>
            </div>
            <p className='has-text-weight-medium is-underlined is-size-6 textHover'>{props.title}</p>
        </a>
    )
}

export default ContactItem