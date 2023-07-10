import axios from "axios"
import * as actionTypes from './type'


const API_URL = "https://wordict-service.onrender.com/api";

export const addWord = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_DATA_START})
    try {
        const res = await axios.post(`${API_URL}/addWord`, data);
        console.log(res.data)
        dispatch({ type: actionTypes.ADD_WORD, payload: res.data});
    } catch (error) {
        console.log(error);
    }
}

export const fetchWords = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_DATA_START})
    try {
        const res = await axios.get(`${API_URL}/getWords`);
        console.log(res.data)
        dispatch({ type: actionTypes.FETCH_DATA_SUCCESS, payload: res.data});
    } catch (error) {
        console.log(error);
    }
}