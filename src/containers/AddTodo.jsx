import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let textInput;
    return (
        <div>
            <form onSubmit={(e)=> {
                    e.preventDefault();
                    let value = textInput.value;
                    dispatch(addTodo(value))
                }} >
                <div>
                    <label htmlFor="add-todo">Add Todo:</label>
                    <input name="add-todo" ref={(ref) => {textInput = ref}} type="text"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo);
export default AddTodo;
