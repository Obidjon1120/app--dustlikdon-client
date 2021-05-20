import React from 'react';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import NewsView from "./pages/newsView"
import Navbar from "./components/navbar";
import DustlikdonTwo from "./components/dustlikdonuz/dustlikdonTwo";
import Footer from "./components/footer";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news-view" exact component={NewsView}/>
                <Route path="/dustlikdonuz" exact component={DustlikdonTwo}/>
            </Switch>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;