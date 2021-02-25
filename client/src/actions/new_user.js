import { a } from "./constants";

export function newUser( payload ) {
    return{
        type: a.ADD_USER,
        payload: {
            payload,
        }
    }
}