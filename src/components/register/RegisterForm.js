import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Typography} from '@material-ui/core'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom'
import imgForm from '../../images/adoptar1.jpg'
import {  purple } from '@material-ui/core/colors';
import { StyledBtn } from '../../styles/Buttons'
import { BackButton } from '../../styles/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { loginError, login } from '../../actions/auth'
import { createUser } from '../../firebase/config'

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
    loginWith: {

    },
    googleBtn: {
        cursor:"pointer",
        marginTop: "5px",
        width: "100%",
        height: "42px",
        backgroundColor: "#4285f4",
        borderRadius: "2px",
        boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.25)",
        transition: "box-shadow .3s ease"

    },
    google_wrapper: {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "1px",
        width: "37px",
        height: "40px",
        borderRadius: "2px",
        backgroundColor: "#fff",
    },
    googleIcon: {
        position: "absolute",
        marginTop: "11px",
        marginLeft: "11px",
        width: "18px",
        height: "18px",
    },
    googleBtnText: {
        float: "right",
        paddingBottom: ".8rem",
        color: "#fff",
        fontSize: "14px",
        letterSpacing: "0.2px",
        textAlign: "center",
        marginLeft: "10rem",
        float: "left",
        
    },
    btnFacebook: {
        cursor:"pointer",
        marginTop: "5px",
        width: "100%",
        height: "42px",
        backgroundColor: "#4285f4",
        borderRadius: "2px",
        boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.25)",
        transition: "box-shadow .3s ease",
        outline: "none",
        border: "none",
        color: "white",
        fontWeight: 800,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        letterSpacing: "0.2px",
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
    }
}));


export const RegisterForm = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const { errorLogin } = useSelector(state => state.auth)
  
    const createAccount = async ( values ) => {
       
            try {
                await createUser(values.name, values.email, values.password)
                
            } catch (error) {
                console.log(error.message)
                dispatch(loginError(error.message))
            }
        
       
    }
 

   
    return (
        <Formik initialValues={{name: "", email: "", password: "", repeat: ""}}
        validationSchema = {Yup.object({
            name: Yup.string()
            .required('Por favor introduce tu nombre')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),

            email: Yup.string()
            .email('Introduce un email válido')
            .required('Completa el campo con tu email'),
            
            password: Yup.string()
            .required('Introduce tu contraseña')
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(15, 'La contraseña debe tener como máximo 15 caracteres'),

            confirm: Yup.string()
            .required('Vuelva a escribir la contraseña')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        })}
        onSubmit={(values, actions) => {
               createAccount(values)
               console.log(values.email);
               setTimeout(() => {
                
                history.push('/succesfull-register')
                actions.setSubmitting(false);
            
              }, 1000);
               
        }}>
       {( {isValid, dirty, isSubmitting})=>(
           <section className={classes.sectionRegister}>
           <div className={classes.register}>
               <div className={classes.registerContainer}>
                    <Form className={classes.registerForm}>
                        <div className={classes.registerBody}>
                        <Typography variant="h2" className={classes.register_h1}>Regístrarse</Typography>
                                <Field as={TextField} type="text" name="name" classes={{root: classes.field}} label="Introduce tu nombre y apellido" variant="outlined" color="secondary" autoComplete="off"/>
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <Field as={TextField}  type="email"  classes={{root: classes.field}} name="email" label="Introduce tu email" variant="outlined" color="secondary" autoComplete="off"/>
                                <ErrorMessage name="email" component="small" className={classes.errorMessage} />
                            

                                <Field as={TextField} type="password"  classes={{root: classes.field}} name="password" label="Introduce tu contraseña" variant="outlined" color="secondary" autoComplete="off"/>
                                <ErrorMessage name="password" component="small" className={classes.errorMessage} />

                                <Field as={TextField} type="password"  classes={{root: classes.field}} name="confirm" label="Repita tu contraseña" variant="outlined" color="secondary" autoComplete="off"/>
                                <ErrorMessage name="confirm" component="small" className={classes.errorMessage} />

                                <StyledBtn type="submit" disabled={!(isValid && dirty) || isSubmitting}>Crear cuenta</StyledBtn>
                                <p className={classes.errorMessage}>{errorLogin}</p>
                        <Typography variant="h4" className={classes.connectLink}>Ya tenés cuenta? Conectate <Link to="/login" className={classes.loginLink}>acá</Link></Typography>
                        <BackButton onClick={() => history.push('/animal-list')}>Volver</BackButton>
                        </div>
                    </Form>
               </div>
           </div>
           </section>
       )}
       </Formik>
    )
}
