import {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError} from './apiActions';
import axios from 'axios';

function fetchTeams() {
    const API_ENDPOINT = "https://us-central1-aoe-td.cloudfunctions.net/API_PROXY"
    console.log("MAKING API CALL")
    return dispatch => {
        dispatch(fetchTeamsPending());
        axios.get(API_ENDPOINT)
        .then(res => res.json())
        .then(res => {
            console.log("Getting result.")
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTeamsSuccess(res.json()));
            return res.teams;
        })
        .catch(error => {
            dispatch(fetchTeamsError(error));
        })
    }
}


export default fetchTeams;