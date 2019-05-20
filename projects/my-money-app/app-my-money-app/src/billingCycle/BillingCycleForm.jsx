import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from "redux-form"
import { connect } from "react-redux"
import { init } from "./billingCycleActions";
import { bindActionCreators } from "redux"

import LabelAndInput from '../common/form/LabelAndInput'
import ItemList from './ItemList';
class BillingCycleForm extends Component {
    
    render() {
        const {handleSubmit, readOnly, credits} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}> 
                <div className="bodx-body">
                <Field readOnly={readOnly} name="name" component={LabelAndInput}
                label="Nome" cols="12 4" placeholder="Informe o nome" />
                <Field readOnly={readOnly} name="month" component={LabelAndInput} 
                type="number" label="Mês"
                cols="12 4" placeholder="Informe o Mês" />
                <Field readOnly={readOnly} name="year" component={LabelAndInput}
                label="Ano" type="number"
                cols="12 4" placeholder="Informe o Mês" />
                <ItemList list={credits} cols="12 6" readOnly={readOnly}
                field="credits" legend="Créditos"/>
                
                </div>
                <div className="box-footer">
                <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                {this.props.submitLabel}
                </button>
                <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({credits:selector(state, 'credits')})

const mapDispatchToProps = dispatch => bindActionCreators({ init },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
