import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { doggoReducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


import App from './App.js';
import { applyMiddleware } from 'redux';

const store = createStore(doggoReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log(store.getState())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
