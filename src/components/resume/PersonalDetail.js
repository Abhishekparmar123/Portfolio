import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PersonalDetail(props) {
    return (
        <div className={"is-flex is-flex-direction-row is-size-5 has-text-danger mb-2"}>
            <FontAwesomeIcon icon={props.icon} style={{marginTop: 6}}/>
            <div className='ml-3'>
                <p className='has-text-weight-medium is-underlined'>{props.title}</p>
                <p className='has-text-white is-size-6'>{props.subTitle}</p>
            </div>
        </div>
    )
}

export default PersonalDetail