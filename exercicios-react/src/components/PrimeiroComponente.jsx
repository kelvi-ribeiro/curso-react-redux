import React from 'react'

const isLegal = true
export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h1>{1 + 1}</h1>
        <h1>Legal ? {isLegal ? 'Sim': 'Não'}</h1>
        <h1>{Math.ceil(Math.random())}</h1>
    </div>


