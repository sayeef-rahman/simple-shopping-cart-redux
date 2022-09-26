import {DECREMENT,INCREMENT} from "./actionTypes";

export const increment = (product) =>{
    return{
        type:INCREMENT,
        payload: product
    }
}

export const decrement = (product) =>{
    return{
        type: DECREMENT,
        payload: product
    }
}
