import React from 'react';

class Todo extends React.Component {
    render(){
        return (
            <li onClick={()=>{
                this.props.dispatch(completeTodo(this.props.id));
                }}>
                {this.props.text}
            </li>
        )
    }

    static propTypes = {
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired
    };
}

export default Todo;
