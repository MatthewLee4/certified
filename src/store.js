import { connect } from "react-redux";
import { createStore } from "redux"

const initState = {
    test: [],
    users: []
}

export const store = createStore(null, initState);