import React from 'react'
import If from './If'
export default props => {    
    return (
        <If show={props.show === undefined ? true : props.show}>        
            <button className={`btn btn-${props.style}`} onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </If>
    )
}