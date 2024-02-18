import React from 'react'

function ProgressBar(props) {
    return (
        <div className={`py-${props.py||3}`}>
            <div className='is-flex is-justify-content-space-between mb-2'>
                <span>{props.language}</span>
                <span>{`${props.percentage}%`}</span>
            </div>
            <progress className="progress is-small is-danger" value={props.percentage} max="100">20%</progress>
        </div>
    )
}

export default ProgressBar