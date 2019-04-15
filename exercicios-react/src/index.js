import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './components/Familia'
import Membro from './components/Membro'
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Familia>
            <Membro nome="Kelvi" sobrenome="Ribeiro" />
            <Membro nome="Thais" sobrenome="Ribeiro" />
        </Familia>
        <Familia>
            <Membro nome="Ned" sobrenome="Stark" />
            <Membro nome="Sansa" sobrenome="Stark" />
        </Familia>
    </div>
    , elemento)