import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Typography} from '@material-ui/core'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom'
import imgForm from '../../images/adoptar3.jpg'
import { StyledBtn } from '../../styles/Buttons'
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
    },
    registerContainer: {
        
        backgroundImage: `linear-gradient(105deg, 
            rgba(255, 255, 255, 0.9 ) 0%, 
            rgba(255, 255, 255, 0.9) 50%, 
            transparent 50%)
            ,url(${imgForm})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
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
        fontFamily: "Poppins"
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
    }
}));


export const LoginForm = () => {
    const classes = useStyles()
    const history = useHistory()


    return (
        <Formik initialValues={{email: "", password: ""}}
        validationSchema = {Yup.object({
            email: Yup.string()
            .email('El email no es válido')
            .required('Por favor introduce tu email'),
            password: Yup.string()
            .required('Por favor introduce tu contraseña')
        })}
        onSubmit={(values, {setSubmitting}) => {
             
               console.log(JSON.stringify( values, null, 2));

        }}>
       {( {isValid, dirty})=>(
            <section className={classes.sectionRegister}>
            <div className={classes.register}>
                <div className={classes.registerContainer}>
                     <Form className={classes.registerForm}>
                         <div className={classes.registerBody}>
                         <Typography variant="h2" className={classes.register_h1}>Ingrese a su cuenta</Typography>

                                 <Field as={TextField}  type="email"  className={classes.InputForm} name="email" label="Introduce tu email" variant="outlined" color="secondary"/>
                                 <ErrorMessage name="email" component="small" className={classes.errorMessage} />
                             
 
                                 <Field as={TextField} type="password" className={classes.InputForm} name="password" label="Introduce tu contraseña" variant="outlined" color="secondary"/>
                                 <ErrorMessage name="password" component="small" className={classes.errorMessage} />
                                 <StyledBtn>Entrar</StyledBtn>
                                 <div className={classes.authContainer}>
                                        <Typography className={classes.register_h1}>Login with:</Typography>

                                    <div className={classes.googleBtn}>
                                        <div className={classes.google_wrapper}>
                                            <img className={classes.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                        </div>
                                        <p className={classes.googleBtnText}><b>Sign in with google</b></p>
                                        </div>
                                    </div>
                                    <div className={classes.btnFace}>
                                        <button type="button" className={classes.btnFacebook}>Continue with Facebook</button>
                                    </div>
                                    <div className="auth__createAcount_link">
                                    <Link to="/auth/register" className="link"> Create new account</Link>
                                    </div>
                            </div>
                     </Form>
                </div>
            </div>
            </section>
       )}
       </Formik>
    )
}
