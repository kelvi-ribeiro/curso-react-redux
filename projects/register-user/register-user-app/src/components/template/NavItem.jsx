import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from './FontAwesomeIcon';

export default props => {
        const hash = window.location.hash        
        const isActive = hash.substring(hash.indexOf('#') + 1,hash.length) === props.url
        return (
        <Link to={props.url} className={isActive && 'active'}>
                
        <FontAwesomeIcon icon={props.icon} /> {props.nome}
        </Link>
        )
}
