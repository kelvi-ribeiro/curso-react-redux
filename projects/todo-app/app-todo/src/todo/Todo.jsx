import React, { Component } from 'react'
import PageHeader from '../template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        console.log(this)
    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}