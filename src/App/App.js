import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import MainPage from '../MainPage/MainPage';

export default function App() {
    return (
        <Switch>
            <Route path="/home">
                <MainPage />
            </Route>
        </Switch>
    );
}