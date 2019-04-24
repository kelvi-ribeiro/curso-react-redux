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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
        .then(res => this.setState({description:'',list:res.data}))
    }

    handleAdd() {
        axios.post(URL,{description:this.state.description})
        .then(() => this.refresh())
    }

    handleChange(e) {
        this.setState({description:e.target.value})
    }

    handleRemove(id){
        axios.delete(`${URL}/${id}`)
        .then(() => this.refresh())
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done:true})
        .then(() => this.refresh())
    }
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done:false})
        .then(() => this.refresh())
    }
    

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleChange={this.handleChange} description={this.state.description} handleAdd={this.handleAdd} />
                <TodoList handleRemove={this.handleRemove} list={this.state.list}
                          handleMarkAsDone={this.handleMarkAsDone}  handleMarkAsPending={this.handleMarkAsPending}      />
            </div>
        )
    }
}