import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription, search, add, clear } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }
    keyHandler(e) {
        const  {add, description, clear} = this.props
        if (e.key === 'Enter') {
            add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const  {add, description, changeDescription} = this.props
        return (
            <div role="form" className="todo-form">
                <Grid cols="12 9 10">
                    <input type="text" id="description"
                        className="form-control" placeholder="Adicione uma tarefa"
                        onChange={(changeDescription)}
                        onKeyUp={this.keyHandler}
                        value={description} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                        onClick={() => add(description)} />
                    <IconButton show={description} style="default" icon="close"
                        onClick={this.props.clear} />

                </Grid>
            </div>
        )
    }

}



const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)


