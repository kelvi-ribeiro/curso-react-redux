import React from 'react'
import IconButton from '../template/IconButton';

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'marked' : ''}>{todo.description}</td>
                <td>
                    <IconButton show={!todo.done} style="success" icon="check"
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton show={todo.done} style="warning" icon="undo"
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton show={todo.done} style="danger" icon="trash-o"
                        onClick={() => props.handleRemove(todo._id)} />
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