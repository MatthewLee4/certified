// import { connect } from "react-redux";
import appReducer from "./reducers/reducers";
import { createStore } from "redux";

const initState = {
    testCategory: '',
    user: {},
    score: 0,
    badges: []
}

export const store = createStore( appReducer, initState);

store.subscribe(() => {
    console.log('state has updated');
    const state = store.getState();
    console.log(state);
});
export default initState;
