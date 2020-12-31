export const types = {
    
    register: '[AUTH] REGISTER_SUCCESS',
    registerError: '[AUTH] REGISTER_ERROR',
    login: '[AUTH] LOGIN_SUCCESS',
    loginError: '[AUTH] LOGIN_ERROR',
    logOut: '[AUTH] LOG_OUT',

    startLoading: '[UI] START_LOADING',
    finishLoading: '[UI] FINISH_LOADING',
    errorAppear: '[UI], ERROR_APPEAR',
    errorCleaned: '[UI] ERROR_CLEANED',

    getPosts: '[POST] GET_POST',
    getActivePost: '[POST] GET_POST_ACTIVE',

    deletePost: '[POST] DELETE_POST'
}