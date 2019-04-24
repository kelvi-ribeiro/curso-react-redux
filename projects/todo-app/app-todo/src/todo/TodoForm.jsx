import React from 'react'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

export default props => (
    <div role="form" className="todo-form">
        <Grid cols="12 9 10">
            <input type="text" id="description"
                className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus"/>
        </Grid>
    </div>
)
