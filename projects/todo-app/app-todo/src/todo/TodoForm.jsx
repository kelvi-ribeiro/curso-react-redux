import React from 'react'
import { connect } from "react-redux";
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
             props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todo-form">
        <Grid cols="12 9 10">
            <input type="text" id="description"
                   className="form-control" placeholder="Adicione uma tarefa"
                   onChange={props.handleChange}
                   onKeyUp={keyHandler}
                   value={props.description} />
        </Grid>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus" 
                        onClick={props.handleAdd}/>            
            <IconButton show={props.description} style="default" icon="close" 
                        onClick={props.handleClear}/>

        </Grid>
    </div>
    )
}


const mapStateToProps = state => ({
    description:state.todo.description
})

export default connect(mapStateToProps)(TodoForm)


