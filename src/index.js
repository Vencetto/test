import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { BrowserRouter, Redirect } from "react-router-dom"
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Redirect to='/home' />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

