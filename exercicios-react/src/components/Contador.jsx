import React,{Component} from 'react'
export default class Contador extends Component {
    maisUm(){
        this.props.numero++
    }
    render(){
        return (
            <div>
            Número: {this.props.numero}
            <button onClick={this.maisUm}>Inc</button>
            <button>Dec</button>
        </div>
        )
    }
}