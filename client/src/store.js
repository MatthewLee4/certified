// import { connect } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { createStore } from "redux";

const initState = {
    testCategory: '',
    user: {},
    score: 0,
    badges: [],
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
}

export const store = createStore( rootReducer , initState);

store.subscribe(() => {
    console.log('state has updated');
    const state = store.getState();
    console.log(state);
});
export default initState;
