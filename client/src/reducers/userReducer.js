import { a } from "../actions/constants";
// import { initState } from "../store";

const initState = {
    test: [],
    user: {}
}

export default function userReducer( state = initState , action ) {
    
    switch(action.type){
        case a.ADD_USER: 
            return {
                ...state,
                user: action.payload
            }
        default:
            return { ...state }
    }
}