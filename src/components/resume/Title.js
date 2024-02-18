import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Title(props) {
  return (
    <div className={"is-flex is-flex-direction-row is-size-4 has-text-danger"}>
        <FontAwesomeIcon icon={props.icon} className="my-auto"/>
        <p className='has-text-weight-medium ml-3 is-underlined'>{props.title}</p>
    </div>
  )
}

export default Title