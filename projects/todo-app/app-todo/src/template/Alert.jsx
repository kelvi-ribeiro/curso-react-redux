import React from 'react'
import Show from './Show'
export default props => {    
    return (
        <div className={`alert alert-${props.style}`} role="alert">
            {props.message}
        </div>
    )
}