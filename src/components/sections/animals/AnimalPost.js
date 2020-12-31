import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BackButton } from '../../../styles/Buttons'
import { Typography } from '@material-ui/core'


const useStyles = makeStyles(theme =>({
    post_container: {
     width: "100%",
     height: "20rem",
     position: "relative",
     marginTop: theme.spacing(1),
    },
    animalName: {
        ...theme.typography.tab,
        position: "absolute",
        color: "white",
        textShadow: "0px 12px 10px rgba(0,0,0,0.5)",
        left: "6.5rem"
    },
    pic: {
        borderRadius: "50%",
        boxShadow: "0px 12px 20px rgba(0,0,0,0.5)",
        transition: "all .3s ease-out",
        "&:hover": {
            transform: "scale(1.08)"
        }
    },
    btnAnimal: {
        position: "absolute",
        top: "15rem",
        right: "9.3rem",
        margin: 0
    }
}))
export const AnimalPost = ({post}) => {
    const classes = useStyles()
    console.log(post)
    return (
        <div className={classes.post_container}>
            <img src={post.pic} width="250" height="200" alt="" className={classes.pic}/>
            <Typography variant="h4" className={classes.animalName}>{post.animalName}</Typography>
            <BackButton type="button" className={classes.btnAnimal}>Ver</BackButton>
        </div>
    )
}
