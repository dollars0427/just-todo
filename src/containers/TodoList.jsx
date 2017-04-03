import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render(){
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        />
                )}
            </ul>
        )
    }

    static propTypes = {
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired
        }).isRequired).isRequired
    };
}

export default TodoList;
