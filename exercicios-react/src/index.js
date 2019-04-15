import React from 'react'
import ReactDOM from 'react-dom'
import CompA, { CompB } from './components/DoisComponentes'
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <CompA valor="Olá, eu sou o componente A" />
        <CompB valor="Olá, eu sou o componente B" />
    </div>
    ,elemento)