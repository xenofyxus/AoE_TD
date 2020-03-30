import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchTeamsAction from '../../actions/fetchTeams';
import {getTeamsError, getTeams, getTeamsPending} from '../../Reducers/apiReducer';

import InfoPresentation from '../../Presentational/InfoPresentation';
import fetchTeams from '../../actions/fetchTeams';


class InfoContainer extends Component {
    constructor(props) {
        super(props);
        
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
    return {
      fetchTeams: () => dispatch(fetchTeams())
    }
  }

const mapStateToProps = state => ({teams : state.teams})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoPresentation);