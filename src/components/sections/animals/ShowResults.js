import React from 'react'
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme =>({
    information: {
        paddingLeft: theme.spacing(1),
        ...theme.typography.tab,
        color: "orangered",
        textShadow: "0px 1px 10px rgba(0,0,0,0.3)"
    }
}))

export const ShowResults = () => {
    const { post } = useSelector(state => state.post)
    const classes = useStyles()
    return (
      
        <div>
            <Typography variant="h2" className={classes.information}>{post.userCredentials.name}</Typography>
            <Typography variant="h2" className={classes.information}>{post.userCredentials.city}</Typography>
            <Typography variant="h2" className={classes.information}>{post.userCredentials.provincia}</Typography>
            <Typography variant="h2" className={classes.information}>{post.userCredentials.email}</Typography>
            <Typography variant="h2" className={classes.information}>{post.userCredentials.cel}</Typography>
        </div>
       
    )
}
