import React, { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import { BackButton } from '../../../styles/Buttons'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { db } from '../../../firebase/config';
import { useDispatch } from 'react-redux'
import { getPostActive } from '../../../actions/post'
import { loadingAction, endLoading } from '../../../actions/ui'

const useStyles = makeStyles(theme =>({
    post_container: {
     width: "100%",
     height: "20rem",
     position: "relative",
     marginTop: theme.spacing(1),
     [theme.breakpoints.down(500)] : {
          
        height: "18rem"
     },
    },
    animalName: {
        ...theme.typography.tab,
        position: "absolute",
        color: "white",
        textShadow: "0px 12px 10px rgba(0,0,0,0.5)",
        left: "6.5rem",
        [theme.breakpoints.down(400)] : {
            left: "4.5rem",
           },
           [theme.breakpoints.up(400)] : {
            left: "6.5rem",
           },
           [theme.breakpoints.up('md')] : {
            left: "6.5rem",
           },
         
    },
    pic: {
        borderRadius: "50%",
        boxShadow: "0px 12px 20px rgba(0,0,0,0.5)",
        transition: "all .3s ease-out",
        objectFit: "cover",
        [theme.breakpoints.down(400)] : {
          width: "200px",
          height: "155px"
            
         },
         [theme.breakpoints.up(500)] : {
          
            width: "220px",
            height: "200px"
         },
         [theme.breakpoints.up('md')] : {
          
            
         },
        "&:hover": {
            transform: "scale(1.08)"
        }
    },
    btnAnimal: {
        position: "absolute",
        top: "15rem",
        right: "9.3rem",
        margin: 0,
        [theme.breakpoints.down(500)] : {
            top: "13rem",
            right: "4.3rem",
           },
           [theme.breakpoints.up(500)] : {
            top: "15rem",
            right: "3rem",
           },
           [theme.breakpoints.up('md')] : {
            top: "15rem",
            right: "4.3rem",
           },
           [theme.breakpoints.up('lg')] : {
            top: "15rem",
            right: "9.3rem",
           },
    }
}))
export const AnimalPost = ({post}) => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

  
            const getPost = async (id) => {
                try {
                    const post = db.collection('posts').doc(id)
                    const response = await post.get()
                    if(response.exists){    
                            dispatch(getPostActive(response.data()))
                            history.push(`/adoption/${id}`)
                           
                    }    
                    dispatch(endLoading())
                } catch (error) {
                    console.log(error.message) 
                }
            }
         
           
          
    
  
    return (
        <div className={classes.post_container}>
        <img src={post.pic} width="250" height="200" alt="" className={classes.pic}/>
            <Typography variant="h4" className={classes.animalName}>{post.animalName}</Typography>
            <BackButton type="button" className={classes.btnAnimal} onClick={() => getPost(post.id)}>Ver</BackButton>
        </div>
    )
}
