export const SELECT_TEAM = 'SELECT_TEAM';

export function selectTeam(id) {
    return {
        type: SELECT_TEAM,
        selectedTeamID: id
    }
}
