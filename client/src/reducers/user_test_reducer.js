import initState from "../store"
import { a } from "../actions/constants";

export default function user_test_reducer( state = initState , action ) {
    const { type } = action
        switch(type){
            case a.ADD_A_TEST:
                return{
                    ...state,
                    testCategory: action.payload
                }
            default: 
                return { ...state }

        } 

}