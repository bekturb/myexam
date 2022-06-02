import {GET_CATEGORIES} from "../actionType/Types";

const initial = {
    categories: [],
     products: [],
     singleItems: [],
 }

 export const Reducer = (state= initial, action) => {
    switch (action.type){
        case GET_CATEGORIES:
            return {...state, categories: action.payload}
        default: return  state
    }
 }