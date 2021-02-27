import { a } from "../actions/constants";
// import { initState } from "../store";

const initState = {
    test: [],
    users: []
}

export default function userReducer( state = initState , action ) {
    
    const {type} = action
    switch(type) {
        case a.ADD_USER:
            return{
                users: [...state.users, action.payload ]
            }
            default:
                return state 
    }   
}