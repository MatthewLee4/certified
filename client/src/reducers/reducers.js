import { 
    UPDATE_STORE
 } from "../actions/constants";
 
 
const initState = {
    test: [],
    users: []
}

export const someReducer = (state = initState,action) => {
    switch(action.type){
        case UPDATE_STORE: 
            return ({
                state
            })
      
        default:
            return state
    }
}
