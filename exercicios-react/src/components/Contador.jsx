import React,{Component} from 'react'
export default class Contador extends Component {
    
    maisUm = () => {
        this.props.numero++
    }
    render(){
        return (
            <div>
            Número: {this.props.numero}
            <button onClick={() => this.maisUm()}>Inc</button>
            <button>Dec</button>
        </div>
        )
    }
    
}

/* Primeira Solução: Garantindo o bind no construtor
constructor(props){
    super(props)
    this.maisUm = this.maisUm.bind(this)
} */

/* Segunda Solução: Usando arrow function para executar a função
<button onClick={() => this.maisUm()}>Inc</button>
 */
/* Terceira Solução: Declarando a função como arrow function
maisUm = () => {
    this.props.numero++
} */