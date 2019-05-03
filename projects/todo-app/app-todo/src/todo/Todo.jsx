import React, { Component } from 'react'

import PageHeader from '../template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Show from '../template/Show';
import Alert from '../template/Alert';

import { connect } from "react-redux";
export class Todo extends Component {        
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm/>
                <Show show={this.props.list.length > 0}>
                    <TodoList                         
                        handleRemove={this.handleRemove} 
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending} />
                </Show>
                <Show show={this.props.list.length === 0 && !this.props.description.length}>
                   <Alert style="warning" message="Nenhum TODO cadastrado"/>
                </Show>
                <Show show={this.props.list.length === 0 && this.props.description.length}>
                   <Alert style="warning" message="Nenhum foi TODO foi encontrado"/>
                </Show>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list:state.todo.list,
    description:state.todo.description
})

export default connect(mapStateToProps)(Todo)