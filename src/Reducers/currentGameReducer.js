import {SELECT_TEAM} from '../actions/gameActions';
import { act } from 'react-dom/test-utils';

const initialState = {
    selectedTeamID : null
}

// REDUCER FOR TEAMS API CALL.
export function gameReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_TEAM: 
            console.log("REACHED HERE " + JSON.stringify(action))
            return {
                ...state,
                selectedTeamID: action.selectedTeamID
            }
        default: 
            return state;
    }
}

