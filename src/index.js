import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <Redirect to='/home' />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

