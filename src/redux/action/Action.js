import axios from "axios";
import Api from '../../api/Api'
import {GET_CATEGORIES} from "../actionType/Types";

 export const getCategory = () => {
    return async (dispatch) => {
        const url = await axios(`${Api.baseURL}/categories`)
        const response = await url
        dispatch({type: GET_CATEGORIES, payload: response.data})
    }
}