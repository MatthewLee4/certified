// import { connect } from "react-redux";
import reducers from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"


const initState = {
    test: {},
    users: {},
    score: 0,
    testAnswer: "",
    userSubmit: "",
    timer: 0
}

export const store = createStore( reducers, applyMiddleware( thunk ));

//Need to get 7 out of 10 questions, then need to store score in database to display on card