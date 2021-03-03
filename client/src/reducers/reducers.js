import initState from '../store';
import { 
    SET_USER
 } from "../actions/constants"; 

export default function appReducer(state = initState, action)  {
    switch(action.type){
        case SET_USER: 
            return {
                ...state,
                user: action.user_logged
            }
        default:
            return { ...state }
    }
}
