import './Header.css'
import React from 'react'
import FontAwesomeIcon from './FontAwesomeIcon';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">        
        <FontAwesomeIcon icon={props.icon}/> {props.title}        
        </h1>
        <p className="lead text-muted">
        {props.subtitle}
        </p>
    </header>