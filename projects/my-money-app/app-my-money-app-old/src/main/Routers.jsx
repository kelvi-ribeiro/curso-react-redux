import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'


import BillingCycle from '../billingCycle/BillingCycle'
import AuthOrDashboard from './AuthOrDashboard';


export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrDashboard} />
        <Route path="/billingCycles" component={BillingCycle} />
        <Redirect from="*" to="/"  />
    </Router>
)