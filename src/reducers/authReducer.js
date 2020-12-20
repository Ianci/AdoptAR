import { types } from '../types'

const initialState = {
    user: 'ianci'
}
export const authReducer = (state = initialState, action ) => {
    const {type, payload } = action
    switch (type) {
       
        default:
            return state;
    }
}