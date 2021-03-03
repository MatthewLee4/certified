import { combineReducers } from "redux";
import userReducer from "./userReducer";
import user_test_reducer from "./user_test_reducer";
import scoreReducer from "./scoreReducer";


// Consolidate our reducers into a combinedReducer
export default combineReducers({
    user: userReducer,
    score: scoreReducer,
    test: user_test_reducer
})