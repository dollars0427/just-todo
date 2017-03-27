import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/';
import { addTodo } from './actions';
import App from './app';

let store = createStore(todoApp);
store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

var element = document.getElementById('todo');

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    element
);
