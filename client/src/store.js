// import { connect } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { createStore } from "redux";

const initState = {
    testCategory: '',
    user: {},
        // {
        //     name: "Joe",
        //     email: "test@tester.com",
        //     password: "123test"
        // },
    score: 0,
    badges: []
}

export const store = createStore( rootReducer , initState);

store.subscribe(() => {
    console.log('state has updated');
    const state = store.getState();
    console.log(state);
});
export default initState;
