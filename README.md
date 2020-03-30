## AoE Tower Defence.

This project is a Tower Defence game that uses data from the Age of Empires II API [https://age-of-empires-2-api.herokuapp.com/docs/] . 
You will be able to build a team of units that will defend against oncoming waves of enemies.
I am using React, Redux and some Node.js running on firebase cloud functions.


### So far:
So far I have setup the initial structure of the project. With the navigation bar routing and the general views I want to have in the final project. I have also started on the backend structure of the game.

### Still planning to do:
For the mid project review I have not yet started on the UI aspect of the game. The help section is supposed to display the possible teams you can select, and information about the units you can build with that team. In addition to this I want to implement a database in firebase where the highscores are stored.

### File Structure:

#### Folders and files
FUNCTIONS folder, you can find the cloud functions. 
    - Index.js -proxies the API-call from the client to the 
    
SRC folder, you can find the code for the actual web app. 
   - Index.js, wraps the main app in the store provider and the router
   - App.js, contains the main app and the routing
ACTIONS
   - apiActions.js, handles the connection between the API calls and the redux store
   - fetchTeams.js, does the API call.
ASSETS
   - Logo for the game. :)
CONTAINER
   - GameContainer.js, Handles the data to display from the backend.
   - HelpContainer.js, Handles the data for the general gameplay instructions.
   - InfoContainer.js, Handles the data for the Info view
   - RankingContainer.js, will handle the data for the Highscore view.
GAME ENGINE
   - Will handle the interaction with the backend for the game.
PRESENTATIONAL
   - GameView.js, going to handle the presentational part of the game.
   - HeaderNav.js, Navigation bar component.
   - HelpPresentation.js, Displaying the gameplay instructions.
   - HomePresentation.js, Home screen view.
   - InfoPresentation.js, View for the infromation about the teams and units.
   - RankingView.js, Displaying the highscore.

REDUCERS
   - apiReducer.js, API state reducer.
   - currentGame.js, Game state reducer.
   - rootReducer.js, Combines reducers. 
  
  
