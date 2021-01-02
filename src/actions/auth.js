import { types } from "../types"
import { firebase, googleAuthProvider } from '../firebase/config'

//Action Login
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {uid, displayName}
    }
}


//Action error login
export const loginError = (error) => {
    return {
        type: types.loginError,
        payload: error
    }
}

//Action for logoOut
export const logOut = () => {
    return {
        type: types.logOut,
    }
}

export const startLogOut = () =>{
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logOut())
    }
}




export const loginWithGoogle = () => {
    return  (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
            dispatch(login(user.uid, user.displayName)
            )
        })
    }
}
