import React from 'react'
import Show from '../../common/operador/Show'
export default props => (
    <Show show={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon}
                     form-control-feedback`}></span>
        </div>
    </Show>
)