import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchTeamsAction from '../../fetchTeams';
import {getTeamsError, getTeams, getTeamsPending} from '../../Reducers/apiReducer';

import InfoPresentation from '../../Presentational/InfoPresentation';


class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchTeams} = this.props;
        fetchTeams();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {teams, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <h2>LOADING ...</h2>//<LoadingSpinner />

        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                <InfoPresentation teams={teams} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getTeamsError(state),
    teams: getTeams(state),
    pending: getTeamsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTeams: fetchTeamsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView );