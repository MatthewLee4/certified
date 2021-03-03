import {a} from "./constants"

score = (payload ) => {
    return{
        type: a.UPDATE_SCORE,
        payload: {
            payload
        }
    }
}