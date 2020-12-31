import { types }from '../types/index'

export const getPostsFromDb = (posts) => {
    return{
        type: types.getPosts,
        payload: posts
    }
}