import { types } from "../types"
import { firebase } from '../firebase/config'

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

}
export const loginWithFacebook = () => {
    return(dispatch)=> {

    }
}