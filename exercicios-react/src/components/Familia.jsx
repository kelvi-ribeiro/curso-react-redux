import React from 'react'
import Membro from './Membro'


export default props =>
    <div>
        <Membro nome="Rafael" sobrenome={props.familia}/>
        <Membro nome="Daniela" sobrenome={props.familia}/>
        <Membro nome="Pedro" sobrenome={props.familia}/>
        <Membro nome="Ana" sobrenome={props.familia}/>
    </div>