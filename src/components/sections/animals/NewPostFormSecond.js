import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Typography, TextareaAutosize} from '@material-ui/core'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom'
import imgForm from '../../../images/cace.jpg'
import {  purple } from '@material-ui/core/colors';
import { StyledBtn } from '../../../styles/Buttons'
import { BackButton } from '../../../styles/Buttons'
import { useDispatch, useSelector } from 'react-redux'


const useStyles = makeStyles((theme)=>({
    sectionRegister: {
        position: "relative",
        padding: "2rem 0",
        borderRadius: "23px",
    },
    register: {
      
        width: "1200px",
        minWidth: "1200px",
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
    btnFace: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px"
    },
    field: {
        margin: theme.spacing(.5),
       
        '& fieldset': {
            borderColor: purple[700],
          },
         
    },
    connectLink: {
        textAlign: "center",
        margin: theme.spacing(.8),
        color: purple[700],
        ...theme.typography.tab
    },
    loginLink: {
        textDecoration: "none",
        color: "orangered",
        "&:hover" : {
            transform: "scale(1.20)",
            color: "orange"
        }
    },
    btnBack: {
        width: "10%"
    }
}));


export const NewPostFormSecond = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const { errorLogin } = useSelector(state => state.auth)
  
  

   
    return (
        <Formik initialValues={{name: "", raza: ""}}
        validationSchema = {Yup.object({
            name: Yup.string()
            .required('Completa este campo')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),
            raza: Yup.string()
            .required('Completa este campo')
            .max(30, '30 caracteres máximo'),
          
        })}
        onSubmit={(values, {setSubmitting}) => {
               setSubmitting(true)
               console.log(values)
               setSubmitting(false)
               
        }}>
       {( {isValid, dirty})=>(
           <section className={classes.sectionRegister}>
           <div className={classes.register}>
               <div className={classes.registerContainer}>
                    <Form className={classes.registerForm}>
                        <div className={classes.registerBody}>
                        <Typography variant="h2" className={classes.register_h1}>Datos de contacto</Typography>
                                <Field as={TextField} type="text" name="name" classes={{root: classes.field}} label="Nombre y apellido" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <Field as={TextField} type="text" name="cel" classes={{root: classes.field}} label="Teléfono de contacto (opcional)" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <Field as={TextField} type="text" name="email" classes={{root: classes.field}} label="Email de contacto" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />
                                
                                <Field as={TextField} type="text" name="city" classes={{root: classes.field}} label="Ciudad" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <StyledBtn type="submit" disabled={!(isValid && dirty)} onClick={() => history.push('/new-post-second')}>Subir</StyledBtn>
                                <p className={classes.errorMessage}>{errorLogin}</p>
 
                        <BackButton onClick={() => history.push('/animal-list')} className={classes.btnBack}>Volver</BackButton>
                        </div>
                    </Form>
               </div>
           </div>
           </section>
       )}
       </Formik>
    )
}

