import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const TodoListView = connect(mapStateToProps)(TodoList);
export default TodoListView;
