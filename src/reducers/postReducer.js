import { types } from '../types'

const initialState = {
    posts: [],
    post: [],
 
}
export const postReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.getPosts:
        return {
            ...state,
            posts: payload
        }
        case types.getActivePost: 
        return {
            ...state,
            post: payload
        }
        default:
            return state
    }
}