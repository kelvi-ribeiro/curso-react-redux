import React, {Component} from 'react'
import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';

export default class BillingCycle extends Component {
    render(){
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
                <Content>
                    Ciclo de Pagamentos
                </Content>
            </div>
        )
    }
} 