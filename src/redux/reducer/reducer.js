import * as actionTypes from '../actions/type'

const initialState = {
    words: [], 
    isFetching: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_WORD:
            return {
                ...state,
                isFetching: false,
                words: [...state.words, action.payload]
            }
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                isFetching: true, 
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                words: action.payload
            }
        default: 
            return state
        }
}