import React from 'react'
import Show from './Show'
export default props => {    
    return (
        <Show show={props.show === undefined ? true : props.show}>        
            <button className={`btn btn-${props.style}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </Show>
    )
}