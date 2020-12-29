import { types } from '../types'


const initialState = {
    error: null,
    loading: false
}
export const uiReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.startLoading:
        return {
            ...state,
            loading: true
        }
        case types.finishLoading: 
        return {
            ...state,
            loading: false
        }
        case types.errorAppear:
        return{
            ...state,
            error: payload
        }
        case types.errorCleaned: 
        return {
            ...state,
            error: null
        }
        default:
            return state
    }
}