import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { init } from "./billingCycleActions";
import { bindActionCreators } from "redux"

import LabelAndInput from '../common/form/LabelAndInput'
class BillingCycleForm extends Component {
    
    render() {
        const {handleSubmit} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}> 
                <div className="bodx-body">
                <Field name="name" component={LabelAndInput}
                label="Nome" cols="12 4" placeholder="Informe o nome" />
                <Field name="month" component={LabelAndInput} 
                type="number" label="Mês"
                cols="12 4" placeholder="Informe o Mês" />
                <Field name="year" component={LabelAndInput}
                label="Ano" type="number"
                cols="12 4" placeholder="Informe o Mês" />
                </div>
                <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm',destroyOnUnmount:false})(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init },dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)
