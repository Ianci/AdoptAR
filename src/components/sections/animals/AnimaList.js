import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import { AnimalPost } from './AnimalPost'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import '../../../index.css'
const useStyles = makeStyles(theme =>({
    posts_container: {
       
        [theme.breakpoints.down(600)] : {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: "2rem",
            marginTop: "4rem"
            
         },
         [theme.breakpoints.up('sm')] : {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            position: "relative",
            marginRight: "2rem",
            marginTop: "4rem"
            
         },
         [theme.breakpoints.up('md')] : {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            position: "relative",
            
         },
    }
}))

export const AnimaList = () => {
    const classes = useStyles()
    const { posts} = useSelector(state => state.post)
    
    return (
        <TransitionGroup>
        <div className={classes.posts_container}>
            {posts.map(post =>(
                  <CSSTransition
                  key={post.id}
                  timeout={300}
                  classNames="item"
                   >
                <AnimalPost 
                key={post.id}
                post={post}
                />
                 </CSSTransition>
            ))}
        </div>
        </TransitionGroup>
    )
}
