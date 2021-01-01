import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'

import { db } from '../../../firebase/config'
import { getPostActive } from '../../../actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    information_h2: {
        ...theme.typography.tab
    },
    information_h1: {
        ...theme.typography.tab,
        color: theme.palette.secondary.main
    }
}))


export const AdoptionDetails = () => {
    const history = useHistory()
    const classes = useStyles()
    const query = history.location.pathname.substring(10)
  
    const dispatch = useDispatch()
    const { post } = useSelector(state => state.post)
 

    useEffect(() => {
        if(query){
            const getPost = async () => {
                try {
                    const post = await db.collection('posts').doc(query).get()
                    if(post.exists){    
                            dispatch(getPostActive(post.data()))
                    }    
                } catch (error) {
                    console.log(error.message) 
                }
            }
            getPost()
        }
    }, [query, dispatch])

    

    return (
        <Container maxWidth="lg" className={classes.detailsContainer}>
            <Typography variant="h1" className={classes.information_h1}>Nombre: {post.animalName}</Typography>
            <Typography variant="h2" className={classes.information_h2}>Raza: {post.raza}</Typography>
            <Typography variant="h2" className={classes.information_h2}>Sexo: {post.sexo}</Typography>
            <Typography variant="h2" className={classes.information_h2}>Tamaño: {post.size}</Typography>
            <img src={post.pic} alt="adoption" className={classes.image}/>
            <Typography variant="h2" className={classes.information_h2}>{post.textarea}</Typography>
            
            <button onClick={() => history.push('/animal-list')}>Volver</button>
        </Container>
    )
}
