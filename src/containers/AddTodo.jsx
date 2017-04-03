import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
    render(){
        return (<div>
            <form onSubmit={(e)=> {
                    e.preventDefault();
                    let value = this.textInput.value;
                    this.props.dispatch(addTodo(value));
                }} >
                <div>
                    <label htmlFor="add-todo">Add Todo:</label>
                    <input name="add-todo" ref={(input) => {this.textInput = input}} type="text"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>);
    }
}

export default connect()(TodoForm);
