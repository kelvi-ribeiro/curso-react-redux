import React from 'react'
import ReactDOM from 'react-dom'
/* import PrimeiroComponente from './components/PrimeiroComponente' */
import {CompA,CompB} from './components/DoisComponentes'
import MultiElementos from './components/MultiplosElementos'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <CompA valor="Olá, eu sou o A"/>
        <CompB valor="Olá, eu sou o B"/> */}        
        {/* <PrimeiroComponente valor="Bom dia"/> */}
    </div>
    ,elemento)