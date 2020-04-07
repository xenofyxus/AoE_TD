import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getTeamsError, getTeams, getTeamsPending} from '../../Reducers/apiReducer';

import InfoPresentation from '../../Presentational/InfoPresentation';
import fetchTeams from '../../actions/fetchTeams';


class InfoContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        fetchTeams();
    }
    render() {
       
        const {teams, error, pending} = this.props;
        return (
            <div>
                <InfoPresentation/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    dispatch(fetchTeams())
    return {temp: null}
  }

const mapStateToProps = state => ({teams : state.teams})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPresentation);