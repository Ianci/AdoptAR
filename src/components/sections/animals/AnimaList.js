import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import { AnimalPost } from './AnimalPost'

const useStyles = makeStyles(theme =>({
    posts_container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        position: "relative"
    }
}))

export const AnimaList = () => {
    const classes = useStyles()
    const { posts} = useSelector(state => state.post)
    console.log(posts)
    return (
        <div className={classes.posts_container}>
            {posts.map(post =>(
                <AnimalPost 
                key={post.id}
                post={post}
                />
            ))}
        </div>
    )
}