import { 
    UPDATE_STORE
 } from "../actions/constants";
 
 
const initState = {
    test: [],
    users: []
}

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
