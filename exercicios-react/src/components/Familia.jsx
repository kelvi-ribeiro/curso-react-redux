import React from 'react'
import { filhosComProps } from '../utils/utils';



export default props =>
    <div>
        <h1>Família</h1>
        {/* Funciona apenas um array de componentes */}
         {React.Children.map(props.children,child => {
            return React.cloneElement(child,{sobrenome:props.sobrenome})
        })} 
         {/* Usando função num arquivo Utils que também funciona com array de componentes {filhosComProps(props)}  */}         
        
        {/*Terceira Forma. Funciona apenas com um único componente {React.cloneElement(props.children,...props)}  */}
        {/*Segunda Forma. Funciona apenas com um único componente {React.cloneElement(props.children,props)}  */}
    </div>