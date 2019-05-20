import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import BillingCycleList from './BillingCycleList'
import BillingCycleForm from './BillingCycleForm'
import { init, create, update, remove } from "./billingCycleActions"

class BillingCycle extends Component {
    componentWillMount(){
        this.props.init()        
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" subtitle="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                            <BillingCycleList/>
                            </TabContent>
                            <TabContent id="tabCreate">
                            <BillingCycleForm onSubmit={this.props.create}
                                              submitLabel="Incluir" submitClass="primary"/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                            <BillingCycleForm onSubmit={this.props.update}
                                              submitLabel="Alterar" submitClass="info"/>
                            </TabContent>
                            <TabContent id="tabDelete">
                            <BillingCycleForm readOnly onSubmit={this.props.remove}
                                              submitLabel="Deletar" submitClass="danger"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)