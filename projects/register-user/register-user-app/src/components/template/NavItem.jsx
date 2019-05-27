import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from './FontAwesomeIcon';

export default props =>                    
        <Link to={props.url}>
        <FontAwesomeIcon icon={props.icon}/> {props.nome}
        </Link>        
        
    