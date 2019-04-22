import React, {Component} from 'react'
import PageHeader from '../template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends Component {
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}