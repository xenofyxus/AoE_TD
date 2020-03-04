import {teamsReducer} from "./apiReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({teams : teamsReducer});

export default rootReducer;
