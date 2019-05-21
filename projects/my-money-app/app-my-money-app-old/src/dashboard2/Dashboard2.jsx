import React, { Component } from 'react'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export default class Dashboard2 extends Component {
    constructor(props){
        super(props)
        this.state = {credit:0, debt:0}
    }
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(summary => {
            this.setState(summary.data)
        })
    }
    render() {                
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${this.state.credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${this.state.debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${this.state.credit - this.state.debt}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}
