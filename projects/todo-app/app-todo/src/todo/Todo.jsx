import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { 
            description:'',
            list:[]
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAdd() {
        axios.post(URL,{description:this.state.description})
        .then(res => console.log(res))
    }
    handleChange(e) {
        this.setState({description:e.target.value})
    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleChange={this.handleChange} description={this.state.description} handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}