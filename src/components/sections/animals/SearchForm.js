import React, { useState } from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';
import { Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom'
import imgForm from '../../../images/cace.jpg'
import {  purple } from '@material-ui/core/colors';
import { StyledBtn } from '../../../styles/Buttons'
import { BackButton } from '../../../styles/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { firebase, db } from '../../../firebase/config'
import { AnimaList } from './AnimaList'

const useStyles = makeStyles(theme => ({
    searchFormContainer: {
      
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    sideBar: {
        width: "320px",
      
    },
    main: {
        flex: "0 0 75%",
        marginTop: theme.spacing(2)
    },
    inputSearch: {
        margin: theme.spacing(2),
        marginLeft: theme.spacing(.2),
        outline: "none",
        border: "none",
        borderRadius: "2rem",
        width: "18rem",
        height: "2rem",
        color: "white",
        ...theme.typography.tab,
        "&::placeholder": {
            fontFamily: "Raleway"
        },
        "&:hover": {
            background: "none",
            border: "0.1px solid white"
        },
        [theme.breakpoints.down(600)] : {
            height: "1rem",
            width: "15rem",
         }
    },
    h2_adoption: {
        ...theme.typography.tab,
        display: "inline",
        "&:hover":{
            borderBottom: "5px solid yellow"
        }
    },
    
}))
export const SearchForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Formik initialValues={{name: ""}}
        validationSchema = {Yup.object({
            name: Yup.string()
            .required('Completa este campo')
        })}
        onSubmit={(values, {setSubmitting}) => {
               setSubmitting(true)
               console.log(values)
               setSubmitting(false)
               
        }}>
       {( {isValid, dirty})=>(    
        <div className={classes.searchFormContainer}>
            <div className={classes.sideBar}>
            <Field name="name" type="text" className={classes.inputSearch} placeholder="Filtrar por raza, ciudad, tamaño" autoComplete="off"/>
            <h1>Hi</h1>
            </div>
            <div className={classes.main}>
                <Typography variant="h2" className={classes.h2_adoption}>Adopción</Typography>
                <AnimaList />
            </div>
        </div>
        )}
        </Formik>
    )
}
