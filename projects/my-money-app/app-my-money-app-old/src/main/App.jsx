import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routers from './Routers'
import Messages from '../common/msg/Messages'
import { validateToken } from '../auth/authActions';

class App extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return (
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    <div className="content-wrapper">
                        <Routers />
                    </div>
                    <Footer />
                    <Messages />
                </div>
            )
        } else if ((!user || Object.keys(user).length === 0) && !validToken) {
            return (
                <div className="wrapper">
                    <Routers />                    
                    <Messages />
                </div>
            )
        } else {
            return false
        }
    }

}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)