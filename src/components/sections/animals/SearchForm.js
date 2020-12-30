import React, { useState } from 'react';
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

const useStyles = makeStyles(theme => ({
    inputSearch: {
        margin: theme.spacing(2),
        outline: "none",
        border: "none",
        borderRadius: "2rem",
        width: "30rem",
        height: "2rem",
        ...theme.typography.tab,
        "&::placeholder": {
            fontFamily: "Raleway"
        },
        "&:hover": {
            borderColor: "red"
        }

    }
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
          <Field name="name" type="text" className={classes.inputSearch} placeholder="Filtrar por raza, ciudad, tamaño" autoComplete="off"/>
        </div>
        )}
        </Formik>
    )
}
