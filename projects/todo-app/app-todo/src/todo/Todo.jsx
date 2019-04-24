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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = ''){        
        const search = description ? `&description__regex=/${description}/`:''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(res => this.setState({description,list:res.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
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
        .then(() => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done:true})
        .then(() => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done:false})
        .then(() => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }    

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleChange={this.handleChange}  description={this.state.description}
                          handleAdd={this.handleAdd} handleSearch={this.handleSearch}
                          handleClear={this.handleClear} />
                <TodoList handleRemove={this.handleRemove} list={this.state.list}
                          handleMarkAsDone={this.handleMarkAsDone}  handleMarkAsPending={this.handleMarkAsPending}      />
            </div>
        )
    }
}