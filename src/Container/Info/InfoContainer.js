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

    componentDidMount(){
        getTeams()
    }

    render() {
        const {teams, error, pending} = this.props;

        console.log(this.state)
        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                <InfoPresentation teams={teams}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({teams : state.teams})

export default connect(
    mapStateToProps,
    null
)(InfoPresentation);