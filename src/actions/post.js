import { types }from '../types/index'

export const getPostsFromDb = (posts) => {
    return{
        type: types.getPosts,
        payload: posts
    }
}


export const getPostActive = (post) => {
    return{
        type: types.getActivePost,
        payload: post
    }
}

export const filterPost = (posts) => {
    return{
        type: types.filterPost,
        payload: posts
    }
}