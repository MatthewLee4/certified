import { combineReducers } from "redux";
import userReducer from "./userReducer";
import someReducer from "./reducers";

// Consolidate our reducers into a combinedReducer
export default combineReducers({
    users: userReducer,
    test: someReducer
})