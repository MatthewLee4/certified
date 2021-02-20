// import { connect } from "react-redux";
import {someReducer} from "./reducers/reducers"
import { createStore } from "redux"

const initState = {
    test: [],
    users: []
}

export const store = createStore(someReducer, initState);