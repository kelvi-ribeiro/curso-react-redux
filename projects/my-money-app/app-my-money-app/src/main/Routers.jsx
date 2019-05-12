import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard2 from '../dashboard2/Dashboard2';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard2} />
        <Route path="/billingCycles" component={BillingCycle} />
        <Redirect from="*" to="/"  />
    </Router>
)