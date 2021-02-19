// import { connect } from "react-redux";
import {someReducer} from "./reducers/reducers"
import { createStore } from "redux"
import { someReducer } from "./reducers/reducers";

const initState = {
    test: [],
    users: []
}

export const store = createStore(someReducer, initState);