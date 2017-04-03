import React from 'react';
import TodoListView from './containers/TodoListView';
import TodoForm from './containers/AddTodo';

class App extends React.Component {
    render(){
        return (
            <div>
              <TodoListView />
              <TodoForm />
            </div>
        )
    }
}
export default App;
