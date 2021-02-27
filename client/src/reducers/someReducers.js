import { 
    UPDATE_STORE
 } from "../actions/constants";
 import initState from "../store";

export default function someReducer(state = initState, action)  {
    switch(action.type){
        case UPDATE_STORE: 
            return ({
                state
            })
        default:
            return state
    }
}
