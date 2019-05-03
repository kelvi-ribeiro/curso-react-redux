import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";
import IconButton from '../template/IconButton';
const TodoList = props => {    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'marked' : ''}>{todo.description}</td>
                <td>
                    <IconButton show={!todo.done} style="success" icon="check"
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton show={todo.done} style="warning" icon="undo"
                        onClick={() => props.markAsPending(todo)} />
                    <IconButton show={todo.done} style="danger" icon="trash-o"
                        onClick={() => props.remove(todo._id)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list:state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove },dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)