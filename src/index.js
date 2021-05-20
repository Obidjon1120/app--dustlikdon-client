import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./sass/main.scss";

import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReduser} from "./redux/redusers/rootReduser";

const store = createStore(rootReduser);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
