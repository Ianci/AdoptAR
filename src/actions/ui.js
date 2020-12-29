import { types } from '../types'


export const loadingAction = () => {
    return{
        type: types.startLoading,
    }
}
export const endLoading = () => {
    return{
        type: types.finishLoading,
    }
}
export const errorHandler = (error) => {
    return{
        type: types.errorAppear,
        payload: error
    }
}

export const errorClean = () => {
    return{
        type: types.errorCleaned,
      
    }
}