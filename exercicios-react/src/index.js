import React from 'react'
import ReactDOM from 'react-dom'
import ComponenteClasse from './components/ComponenteClasse';

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>        
        <ComponenteClasse valor="Oie para todos"/>
    </div>
    , elemento)