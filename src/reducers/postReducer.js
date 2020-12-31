import { types } from '../types'

const initialState = {
    posts: [],
    post: null
}
export const postReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.getPosts:
        return {
            ...state,
            posts: payload
        }
        default:
            return state
    }
}