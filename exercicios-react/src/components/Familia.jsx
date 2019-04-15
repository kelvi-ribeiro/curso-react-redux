import React from 'react'



export default props =>
    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children,{sobrenome:props.sobrenome})} 
        {/*Terceira Forma {React.cloneElement(props.children,...props)}  */}
        {/*Segunda Forma {React.cloneElement(props.children,props)}  */}
    </div>