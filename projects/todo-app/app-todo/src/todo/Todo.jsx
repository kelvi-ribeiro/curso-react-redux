import React from 'react'

import PageHeader from '../template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Show from '../template/Show';
import Alert from '../template/Alert';

import { connect } from "react-redux";

export const Todo = props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <Show show={props.list.length > 0}>
            <TodoList/>
        </Show>
        <Show show={props.list.length === 0 && !props.description.length}>
            <Alert style="warning" message="Nenhum TODO cadastrado" />
        </Show>
        <Show show={props.list.length === 0 && props.description.length}>
            <Alert style="warning" message="Nenhum foi TODO foi encontrado" />
        </Show>
    </div>
)

const mapStateToProps = (state) => ({
    list: state.todo.list,
    description: state.todo.description
})

export default connect(mapStateToProps)(Todo)