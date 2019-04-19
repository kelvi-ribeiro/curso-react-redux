import React,{Component} from 'react'
export default class Contador extends Component {
    state = {
        numero:this.props.numeroInicial
    }
    
    maisUm = () => {
        this.setState({numero:++this.state.numero})
    }
    menosUm = () => {
        this.setState({numero:--this.state.numero})
    }

    alterarValor = diferenca => {
        this.setState({numero:this.state.numero + diferenca})
    }

    render(){
        return (
            <div>
            Número: {this.state.numero}
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.menosUm}>Dec</button>
            <button onClick={() => this.alterarValor(100)}>Inc100</button>
            <button onClick={() => this.alterarValor(-100)}>Dec100</button>
        </div>
        )
    }
    
}

/* Primeira Solução: Garantindo o bind no construtor
constructor(state){
    super(state)
    this.maisUm = this.maisUm.bind(this)
} */

/* Segunda Solução: Usando arrow function para executar a função
<button onClick={() => this.maisUm()}>Inc</button>
 */
/* Terceira Solução: Declarando a função como arrow function
maisUm = () => {
    this.state.numero++
} */