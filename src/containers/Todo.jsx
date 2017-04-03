import React from 'react';

class Todo extends React.Component {
    render(){
        return (
            <li>
                {this.props.text}
            </li>
        )
    }

    static propTypes = {
        text: React.PropTypes.string.isRequired
    };
}

export default Todo;
