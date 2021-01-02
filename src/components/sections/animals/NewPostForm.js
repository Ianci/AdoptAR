import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { TextField, Typography, } from '@material-ui/core'
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom'
import imgForm from '../../../images/cace.jpg'
import {  purple } from '@material-ui/core/colors';
import { StyledBtn } from '../../../styles/Buttons'
import { BackButton } from '../../../styles/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { firebase, db } from '../../../firebase/config'
import { loadingAction, errorHandler, endLoading} from '../../../actions/ui'


const useStyles = makeStyles((theme)=>({
    sectionRegister: {
        position: "relative",
        padding: "2rem 0",
        borderRadius: "23px",
    },
    register: {
      
        width: "1200px",
       
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
                width: "330px",
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
        padding: theme.spacing(.1)
    },
    btnFace: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px"
    },
    field: {
        margin: theme.spacing(.5),
        [theme.breakpoints.down(600)] : {
            color:"white"
             
          },
       
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
        width: "70%",
        margin: "0 auto"
    },
    labelForm: {
        fontSize: "1.2rem",
        letterSpacing: 1.333,
        fontWeight: 500,
        marginLeft: theme.spacing(.8),
    },
    fieldForm: {
        outline: "none",
        width: "26rem",
        height: "2rem",
        marginBottom: theme.spacing(.4),
        marginLeft: theme.spacing(.8),
        border: "1px solid purple",
        background: "transparent",
        borderRadius: "4px",
        "&:hover": {
        border: "1px solid green"
        },
        [theme.breakpoints.down(600)] : {
            width: "14.7rem"
            
         },
    },
    textAreaForm: {
        marginTop: theme.spacing(1),
        resize: "none",
        outline: "none",
        width: "26rem",
        height: "22rem",
        marginLeft: theme.spacing(.8),
        border: "1px solid purple",
        background: "transparent",
        borderRadius: "4px",
        "&:hover": {
        border: "1px solid green"
        },
        "&::placeholder": {
            fontSize: "1rem",
            fontFamily: "Roboto"
        },
        [theme.breakpoints.down(600)] : {
            width: "16rem",
            height: "15rem"
            
         },
    },
    divContainer: {
        display: "flex",
        [theme.breakpoints.down(600)] : {
            display: "block"
            
         },
       
    }
}));


export const NewPostForm = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const { errorLogin, user:{uid} } = useSelector(state => state.auth)
    
    
    const [ click, setClick ] = useState(false)
    //Upload image to Storage
    const [ photoUrl , setPhotoUrl] = useState(null)
    
    
    const handleChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setPhotoUrl(await fileRef.getDownloadURL())
        
    }

    const handleSetClick = () => {
        setClick(!click)
       }
    //New post
    const newPost = async ( values ) => {
        if(!uid) history.push('/')
        const newPost = {
            animalName: values.animalName,
            raza: values.raza,
            size: values.size,
            sexo: values.sexo,
            textarea: values.textarea,
            age: values.age,
            creatorId: uid,
            pic: photoUrl,
            date: Date.now(),
            userCredentials: {
                name: values.name,
                city: values.city,
                cel: values.cel,
                email: values.email,
                provincia: values.provincia
            }
        }
        try {
            await db.collection('posts').add(newPost)
           
            dispatch(loadingAction())
            

        } catch (error) {
            console.log(error)
            dispatch(errorHandler(error.message))
        }
    }
   
   
    
    return (
        <Formik initialValues={{animalName: "", raza: "", size: "", sexo: "", textarea: '', age: "", animalProfilePic: undefined, name: "", city: "", cel: "", email: "", provincia: ""}}
        validationSchema = {Yup.object({
            animalName: Yup.string()
            .required('Completa este campo')
            .max(12, 'Tu nombre debe contener 12 caracteres máximo'),
            raza: Yup.string()
            .required('Completa este campo')
            .max(30, '30 caracteres máximo'),
            age: Yup.number()
            .required('Completa este campo')
            .max(25),
            size: Yup.string()
            .required('Required'),
            sexo: Yup.string()
            .required('Required'),
            textarea: Yup.string()
            .required('Required')
            .max(250, '250 caracteres máximo'),
            animalProfilePic: Yup.mixed(),
            name: Yup.string()
            .required('Completa este campo')
            .max(15, 'Tu nombre debe contener 15 caracteres máximo'),
            city: Yup.string()
            .required('Completa este campo')
            .max(25, '25 caracteres máximo'),
            email: Yup.string()
            .email('Introduce un email válido')
            .required('Completa el campo con tu email'),
            cel: Yup.number()
            .required('Completa este campo'),
            provincia: Yup.string()
            .required('Completa este campo')      
        })}
        onSubmit={(values, actions ) => { 
               newPost(values)
               setTimeout(() => {
                dispatch(endLoading())
                history.push('/animal-list')
                actions.setSubmitting(false);
            
              }, 1000);
              
               
        }}>
       {( {isValid, dirty, isSubmitting})=>(
           <section className={classes.sectionRegister}>
           <div className={classes.register}>
               <div className={classes.registerContainer}>
                    <Form className={classes.registerForm}>

                    <div className={classes.registerBody}>
                    {click 
                    ?
                    <Typography variant="h2" className={classes.register_h1}>Datos de contacto</Typography>  
                    : 
                    <Typography variant="h2" className={classes.register_h1}>Nuevo post</Typography>
                    }
                    

                   {click ? 
                   <>
                        
                        <Field as={TextField} type="text" name="name" classes={{root: classes.field}} label="Nombre y apellido" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                        <ErrorMessage name="name" component="small" className={classes.errorMessage} />

                        <Field as={TextField} type="text" name="cel" classes={{root: classes.field}} label="Teléfono de contacto (opcional)" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                        <ErrorMessage name="cel" component="small" className={classes.errorMessage} />

                        <Field as={TextField} type="text" name="email" classes={{root: classes.field}} label="Email de contacto" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                        <ErrorMessage name="email" component="small" className={classes.errorMessage} />
                        
                        <Field as={TextField} type="text" name="city" classes={{root: classes.field}} label="Ciudad" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                        <ErrorMessage name="city" component="small" className={classes.errorMessage} />

                        <label htmlFor="provincia" className={classes.labelForm}>Provincia</label>
                        <Field name="provincia" as="select" className={classes.fieldForm} id="provincia">
                        <option value="" disabled="disabled">--Seleccionar--</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Luis">San Luis</option>
                        <option value="San Juan">San Juan</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Tucumán">Tucumán</option>
                        <option value="Tierra del Fuego, Antártida e Isla del Atlántico Sur">Tierra del Fuego, Antártida e Isla del Atlántico Sur</option>
                        </Field>
                    </>
                   :
                   <>
                   <Field as={TextField} type="text" name="animalName" classes={{root: classes.field}} label="Nombre del animal" variant="outlined" color="secondary" autoComplete="off" size="small"/>
                    <ErrorMessage name="animalName" component="small" className={classes.errorMessage} />

                    <label htmlFor="raza" className={classes.labelForm}>Raza</label>
                    <Field name="raza" as="select" className={classes.fieldForm} id="raza">
                        <option value="" disabled="disabled">--Seleccionar--</option>
                        <option value="No tiene">No tiene</option>
                        <option value="Rotweiller">Rotweiller</option>
                        <option value="Pastor Aleman">Pastor Aleman</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Golden Retriever">Golden Retriever</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Otra">Otra</option>
                    </Field>
                    

                    <div className={classes.divContainer}>
                    <label htmlFor="number" className={classes.labelForm}>Edad</label>
                    <Field as="input" type="number" name="age"className={classes.fieldForm} label="Edad" id="number" max="100"/>

                    <label htmlFor="dog-size" className={classes.labelForm}>Tamaño</label>
                    <Field name="size" as="select" id="dog-size" className={classes.fieldForm}>
                        <option value="" disabled="disabled">--Seleccionar--</option>
                    
                        <option value="Chico">Chico</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                    </Field>

                    </div>

                    <label htmlFor="sex" className={classes.labelForm}>Sexo</label>
                    <Field name="sexo" as="select" className={classes.fieldForm} id="sex">
                        <option value="" disabled="disabled">--Seleccionar--</option>
                        <option value="Hembra">Hembra</option>
                        <option value="Macho">Macho</option>
                    </Field>

                    <Field as={TextField} type="file" name="animalProfilePic" classes={{root: classes.field}} label="Foto del animal" variant="outlined" color="secondary" autoComplete="off" size="small"
                    onChange={handleChange}/>
                    <ErrorMessage name="animalProfilePic" component="small" className={classes.errorMessage} />

                    <Field as={TextField} classes={{root: classes.field}} name="textarea" placeholder="Describe al animal" autoComplete="off" />
                    <ErrorMessage name="textarea" component="small" className={classes.errorMessage} />
                   </>
                   }
                    <StyledBtn type="button" onClick={handleSetClick}>{click ? 'Volver' : 'Siguiente'}</StyledBtn>
                            <p className={classes.errorMessage}>{errorLogin}</p>

                    {click &&  <StyledBtn type="submit" disabled={!(isValid && dirty) || isSubmitting}>Subir</StyledBtn>}
                    <p className={classes.errorMessage}>{errorLogin}</p>

                   

                    <BackButton onClick={() => history.push('/animal-list')} className={classes.btnBack}>Volver al inicio</BackButton>
                    
                    
                          
                    </div>
                    
                       
                        
                    </Form>
               </div>
           </div>
           </section>
       )}
       </Formik>
    )
}

