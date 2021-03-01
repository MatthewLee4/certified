import { a } from "../actions/constants";
// import { initState } from "../store";

const initState = {
    test: [],
    users: []
}

export default function userReducer( state = initState , action ) {
    
     switch(action.type){
        case a.SET_USER: 
            return {
                ...state,
                user: action.user_loggedIn
            }
        default:
            return state
    }
}