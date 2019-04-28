import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './components/./exercicio-redux-01-field/Field';
import fieldReducer from './components/./exercicio-redux-01-field/fieldReducer'

const elemento = document.getElementById('root')

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field  />
    </Provider>

    , elemento)