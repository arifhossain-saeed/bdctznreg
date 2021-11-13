// Mandatory Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as AppRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'remote-redux-devtools';

// Custom Imports
import loginReducer from "./store/reducers/loginReducer";
import './index.css';
import AppRoutes from "./routes";


// Create Redux Store
const store = createStore(combineReducers({loginReducer}), composeWithDevTools());


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