import { a } from "./constants"

export function userTest( payload ) {
    return{
        type: a.ADD_A_TEST,
        payload: {
            payload
        }
    }
}