
import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Typography} from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import imgForm from '../../images/adoptar1.jpg'
import {  purple } from '@material-ui/core/colors';
import { StyledBtn } from '../../styles/Buttons'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'

import { useAuth } from '../../hooks/useAuth'



const useStyles = makeStyles((theme)=>({
    sectionRegister: {
        position: "relative",
        padding: "2rem 0",
        borderRadius: "23px",
    },
    register: {
      
        width: "1200px",
        maxWidth: "1200px",
        height: "40rem",
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.4)",
        margin: "0 auto",
        [theme.breakpoints.down(600)] : {
            width: "320px",
            margin: 0,
            height: "37rem", 
         },
         [theme.breakpoints.only('md')]: {
            width: "600px",
            height: "37rem", 
          },
          [theme.breakpoints.only('sm')]: {
            width: "500px",
            height: "37rem", 
          },
    },
    registerContainer: {
        
        backgroundImage: `linear-gradient(105deg, 
            rgba(255, 255, 255, 0.9 ) 0%, 
            rgba(255, 255, 255, 0.9) 50%, 
            transparent 50%)
            ,url(${imgForm})`,
            backgroundSize: "cover",
            width: "100%",
            height: "103%",
            [theme.breakpoints.down(600)] : {
                backgroundImage: `linear-gradient(105deg, 
                    rgba(255, 255, 255, 0.9 ) 0%, 
                    rgba(255, 255, 255, 0.9) 20%, 
                    transparent 50%)
                    ,url(${imgForm})`,
                    backgroundSize: "cover",
                    objectFit: "cover"
             },
    },
    authContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: theme.spacing(1)
    },
    registerBody: {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        padding: theme.spacing(2),
        [theme.breakpoints.down(600)] : {
            width: "320px",
            margin: 0,
            height: "37rem",
            
         },
         [theme.breakpoints.up('md')]: {
            width: "380px",
          },
          [theme.breakpoints.up('lg')]: {
            width: "500px",
          },
    },
  
    register_h1: {
        textAlign: "center",
        ...theme.typography.tabs,
        marginBottom: theme.spacing(1),
        fontFamily: "Poppins",
        color: "orangered",
        textShadow: "0px 2px 10px rgba(0,0,0,0.3)"
    },
    errorMessage: {
        color: "red",
        padding: theme.spacing(.5)
    },
  
}));
export const LoginSucesFull = () => {
    const classes = useStyles()
    const history = useHistory()
    const user = useAuth()
    const dispatch = useDispatch()
    const reduxUser = () => {
        dispatch(login(user.uid, user.displayName))
        history.push('/')
    }
    return (
        <section className={classes.sectionRegister}>
        <div className={classes.register}>
            <div className={classes.registerContainer}>
          
                     <div className={classes.registerBody}>
                     <Typography variant="h2" className={classes.register_h1}>Ingreso exitoso</Typography>
                            

                             <StyledBtn type="button" onClick={reduxUser}>Ir al inicio</StyledBtn>
                    
                   
                     </div>
             
            </div>
        </div>
        </section>
    )
}
