import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Typography} from '@material-ui/core'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom'


const useStyles = makeStyles((theme)=>({
}));


export const RegisterForm = () => {
    const classes = useStyles()
    const history = useHistory()


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
        onSubmit={(values, {setSubmitting}) => {
             
               console.log(JSON.stringify( values, null, 2));

        }}>
       {( {isValid, dirty})=>(
           <section className={classes.sectionRegister}>
           <div className={classes.register}>
               <div className={classes.registerContainer}>
                    <Form className={classes.registerForm}>
                        <Typography variant="h2">Regístrarse</Typography>
                        <div className={classes.registerBody}>
                                <Field as={TextField} type="text" name="name" className={classes.InputForm} label="Introduce tu nombre y apellido" variant="outlined" color="secondary" />
                                <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                                <Field as={TextField}  type="email"  classes={classes.InputForm} name="email" label="Introduce tu email" variant="outlined" color="secondary"/>
                                <ErrorMessage name="email" component="small" className={classes.errorMessage} />
                            

                                <Field as={TextField} type="password" className={classes.InputForm} name="password" label="Introduce tu contraseña" variant="outlined" color="secondary"/>
                                <ErrorMessage name="password" component="small" className={classes.errorMessage} />

                                <Field as={TextField} type="password" className={classes.InputForm} name="confirm" label="Repita tu contraseña" variant="outlined" color="secondary"/>
                                <ErrorMessage name="confirm" component="small" className={classes.errorMessage} />
                        </div>
                        <Typography variant="h4">Ya tenés cuenta? Conectate<span>acá</span></Typography>
                    </Form>
               </div>
           </div>
           </section>
       )}
       </Formik>
    )
}
