import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HeaderNav from './Presentational/HeaderNav'
import Home, { HomeContainer } from './Home/HomeContainer';

function reducer(state = {}, action) {
    return {
      shapes: "SHIT",
      currentShape: 1337
    };
  }

const store = createStore(reducer);

export class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
        <div>
            <Provider store={store}>
                <Router>
                <HeaderNav/>
                    <HomeContainer />
                </Router>
            </Provider>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));