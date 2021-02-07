import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
    information_h2: {
        ...theme.typography.tab,
        padding: theme.spacing(1),
        display: "inline",
    },
    information_h1: {
        ...theme.typography.tab,
        color: theme.palette.secondary.main,
        padding: theme.spacing(1)
    },
    detailsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(1),
        background: "#EDF4ED",
        minheight: "100vh",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.6)"
    },
    spanContent: {
        ...theme.typography.tab,
        color: theme.palette.primary.main,
        textShadow: "0px 2px 15px rgba(0,0,0,0.9)"
    },
    information_textarea: {
        ...theme.typography.tab,
        textAlign: "center",
        padding: theme.spacing(1),
        color: theme.palette.common.white,
    },
    information_h3: {
        ...theme.typography.tab,
        padding: theme.spacing(1),
        margin: theme.spacing(),
        cursor: "pointer",
        border: "2px solid transparent",   
        outline: "none",
        color: "white",
        textShadow: "opx 10px 20px rgba(0,0,0,0.5)",  
        background: "linear-gradient(to bottom right, #8B001F, #C417FE)"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "500px",
        objectFit: "cover",
        borderRadius: "3rem",
        transition: "all .3s ease-out",
        "&:hover" : {
            boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
            transform: "scale(1.05)"
        }
    }
}))


export const IndividualPost = ({post}) => {
    const classes = useStyles()
    return (
     <>
            <Typography variant="h1" className={classes.information_h1}>Nombre: <span className={classes.spanContent}>{post.animalName}</span></Typography>
            <Typography variant="h2" className={classes.information_h2}>Raza: <span className={classes.spanContent}>{post.raza}</span></Typography>
            <Typography variant="h2" className={classes.information_h2}>Sexo: <span className={classes.spanContent}>{post.sexo}</span></Typography>
            <Typography variant="h2" className={classes.information_h2}>Tamaño: <span className={classes.spanContent}>{post.size}</span></Typography>
            <img src={post.pic} alt="adoption" className={classes.image}/>
            <Typography variant="h3" className={classes.information_textarea}>"{post.textarea}". <span className={classes.spanContent}>-{post.userCredentials.name}</span></Typography>
    </>
    )
}
