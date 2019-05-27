import './Footer.css'
import React from 'react'
import FontAwesomeIcon from './FontAwesomeIcon';

export default props =>
    <footer className="footer">
        <span>
           Desenvolvido com <FontAwesomeIcon icon="heart text-danger"/> Por &nbsp; 
           <strong><span className="text-danger">K</span>
           elvi&nbsp; 
           <span className="text-danger">
           R
           </span>
           ibeiro</strong>
        </span>
    </footer>