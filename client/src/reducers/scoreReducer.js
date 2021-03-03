import initState from '../store';
import { a } from "../actions/constants";

export default function scoreReducer(state = initState,action) {
    const {type} = action
    switch(type) {
        case(a.UPDATE_SCORE):
        return {
            ...state,
            score:action.payload
        } 
        default: {
            return [...state]
        }
    }
}