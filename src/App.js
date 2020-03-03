import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './reduxStore';
import {HomeContainer} from './Home/HomeContainer'

function App() {
  return (
    HomeContainer({... store} )
    );
}

export default App;
