import {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError} from './actions/apiActions';

// Fetching teams avoiding cors with https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations
function fetchTeams() {
    const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/"
    const API_ENDPOINT = "https://age-of-empires-2-api.herokuapp.com/api/v1/"
    return dispatch => {
        dispatch(fetchTeamsPending());
        fetch(CORS_ANYWHERE + API_ENDPOINT + "civilizations", 
            {headers: 
                {'X-Requested-With' : XMLHttpRequest}
                
            }
            )
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTeamsSuccess(res.teams));
            return res.teams;
        })
        .catch(error => {
            dispatch(fetchTeamsError(error));
        })
    }
}
export default fetchTeams;