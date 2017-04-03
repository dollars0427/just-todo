import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/';
import App from './app';


let store = createStore(todoApp);

var element = document.getElementById('todo');

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    element
);
