import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './components/Field';

const elemento = document.getElementById('root')

const reducers = combineReducers({
    field: () => ({ value: 'opa' })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field  />
    </Provider>

    , elemento)