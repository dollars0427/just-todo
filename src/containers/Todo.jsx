import React from 'react';
import {connect} from 'react-redux';
import {completeTodo} from '../actions';

class Todo extends React.Component {
    render(){
        return (
            <div>
                {this.props.completed ? (
                    <li onClick={()=>{
                            this.props.dispatch(completeTodo(this.props.id));
                        }}>
                        Completed:{this.props.text}
                    </li>
                ): (
                    <li onClick={()=>{
                            this.props.dispatch(completeTodo(this.props.id));
                        }}>
                        {this.props.text}
                    </li>
                )}
            </div>
        )
    }

    static propTypes = {
        id: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired
    };
}

export default connect()(Todo);
