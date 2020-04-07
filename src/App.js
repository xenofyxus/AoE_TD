import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import HeaderNav from './Presentational/HeaderNav'
import HomeContainer from './Container/Home/HomeContainer';
import InfoContainer from './Container/Info/InfoContainer';

// App layout
export default class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
        <div id="root">
            <HeaderNav/>    
            <Switch>    
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/info">
                    <InfoContainer/>
                </Route>
            </Switch>
        </div>
        );
    }
}
