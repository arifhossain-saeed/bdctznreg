// Mandatory Imports
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as AppRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {compose, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

// Custom Imports
import loginReducer from "./store/reducers/loginReducer";
import './index.css';
import AppRoutes from "./routes";
import reducers from './store/reducers'

// Create Redux Store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Code Block
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter>
                <AppRoutes/>
            </AppRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);