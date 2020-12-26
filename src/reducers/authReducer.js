import { types } from '../types'

const initialState = {
    user: null,
    errorLogin: null,
    isLogged: false
}
export const authReducer = (state = initialState, action ) => {
    const {type, payload } = action
    switch (type) {
    
        case types.login: 
        return {
            user: { uid: payload.uid, name: payload.displayName},
            errorLogin: null,
            isLogged: true
        }
        case types.loginError:
            return {
                user: null,
                errorLogin: payload,
                isLogged: false
            }
        case types.logOut: 
        return {
            user: null,
            isLogged: false
        }
        default:
            return state;
    }
}