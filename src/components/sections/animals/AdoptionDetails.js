import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../../firebase/config'
import { getPostActive } from '../../../actions/post'
import { useDispatch, useSelector } from 'react-redux'
export const AdoptionDetails = () => {

    const history = useHistory()
    const query = history.location.pathname.substring(10)
    const dispatch = useDispatch()
    const { post } = useSelector(state => state.post)
    console.log(post)
    useEffect(() => {
        if(query){
            const getPost = async () => {
                const post = await db.collection('posts').doc(query).get()
                if(post.exists){
                dispatch(getPostActive(post.data()))
                }
            }
            getPost()
        }
    }, [query, dispatch])

    return (
        <div>
            <h1>{post.animalName}</h1>
            <button onClick={() => history.push('/animal-list')}>Volver</button>
        </div>
    )
}
