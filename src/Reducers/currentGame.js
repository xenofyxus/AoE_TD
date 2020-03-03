export default function currentGame(state=0, action) {

    if (action.type === 'SET_CURRENT_GAME') {
        console.log(action)
        return action.currentGame
    } else {
        return state
    }
  }