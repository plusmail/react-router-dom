import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AppTodos from "./AppTodos";
import AppNews from "./AppNews";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import IndexNews from "./IndexNews";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<App/>*/}
        {/*<AppTodos/>*/}
        {/*<AppNews/>*/}

        <IndexNews/>

    </BrowserRouter>
);

