import { combineReducers } from "redux";
import userReducer from "./userReducer";
import user_test_reducer from "./user_test_reducer";

// Consolidate our reducers into a combinedReducer
export default combineReducers({
    user: userReducer,
    test: user_test_reducer
})