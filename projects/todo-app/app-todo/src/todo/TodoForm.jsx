import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }
    keyHandler(e) {
        if (e.key === 'Enter') {
            this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todo-form">
                <Grid cols="12 9 10">
                    <input type="text" id="description"
                        className="form-control" placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                        onClick={this.props.handleAdd} />
                    <IconButton show={this.props.description} style="default" icon="close"
                        onClick={this.props.handleClear} />

                </Grid>
            </div>
        )
    }

}



const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)


