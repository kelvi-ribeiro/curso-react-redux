import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from '././components/exercicio-redux-02-counter-actions/counterReducer'
import Counter from './components/exercicio-redux-02-counter-actions/counter'


const elemento = document.getElementById('root')

const reducers = combineReducers({
    counter: counterReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
, elemento)