import { a } from "../actions/constants";
import { store } from "../store";

export default function userReducer( state = store , action ) {
    
    const {type} = action
    switch(type) {
        case a.ADD_USER:
            return{
                ...state.users,
                users: [
                    ...action.payload
                ]
            }
    }   
}