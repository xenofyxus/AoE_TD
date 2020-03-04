import React, { Component } from 'react';
import { applyMiddleware, createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers/rootReducer';
import initialState from './initialState';

import HeaderNav from './Presentational/HeaderNav'
import HomeContainer from './Home/HomeContainer';
import InfoContainer from './Container/Info/InfoContainer';


// Async actions
const middlewares = [thunk];

// Enables Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

// App layout
export default class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
        <div id="root">
            <Provider store={store}>
                <HeaderNav/>
                {/*<HomeContainer />*/}
                <InfoContainer/>
    
            </Provider>
        </div>
        );
    }
}
