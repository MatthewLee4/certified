// import { connect } from "react-redux";
import reducers from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"


// const initState = {
//     test: [],
//     users: []
// }

export const store = createStore( reducers, applyMiddleware( thunk ));
