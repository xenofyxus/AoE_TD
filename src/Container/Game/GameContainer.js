import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import HomePresentation from '../Presentational/HomePresentation';


class GameContainer extends Component {
        constructor(props) {
            super(props);
        
        }

        render() {
            return (
                    <HomePresentation routeToInfo={this.toInfo}/>
            )
        }
    }



const numDispatchToProps = (dispatch) => 
        ({setNum: x=>dispatch({type: 'SET_NO_GUESTS', numberOfGuests: x})});
const mapStateToProps = (state, ownProps) => 
        ({num: state.numberOfGuests});



export default connect(
         mapStateToProps, 
         numDispatchToProps)
(GamePresentation);