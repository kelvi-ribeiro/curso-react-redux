import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Calculator from './main/Calculator';

ReactDOM.render(
    <React.Fragment>
        <h1>Calculadora</h1>
        <Calculator />
    </React.Fragment>,
    document.getElementById('root'));
serviceWorker.unregister();
