// import { connect } from "react-redux";
import reducers from "./reducers/rootReducer"
import { createStore } from "redux"


const initState = {
    test: [],
    users: []
}

export const store = createStore( reducers, initState );