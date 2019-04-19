import React from 'react'
import ReactDOM from 'react-dom'
import Contador from './components/Contador';

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>        
        <Contador numeroInicial={200}/>
    </div>
    , elemento)