import React from 'react'
import ReactDOM from 'react-dom'
import Hook from './components/Hook';

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>        
        <Hook numeroInicial={200}/>
    </div>
    , elemento)