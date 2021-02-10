import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import { ShowResults } from './ShowResults'
import { db } from '../../../firebase/config'
import { getPostActive } from '../../../actions/post'
import { loadingAction, endLoading } from '../../../actions/ui'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { StyledBtn } from '../../../styles/Buttons'
import { RiArrowDownCircleFill } from 'react-icons/ri'

import { IndividualPost } from './IndividualPost'


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


export const AdoptionDetails = () => {
    const history = useHistory()
    const classes = useStyles()

    const [ click, setClick ] = useState(false)
  
   
    //Redux states
    const { post } = useSelector(state => state.post)
    console.log(post)
  

    const handleClick = () => {
        setClick(!click)
    }

    

    

    return (
        <Container maxWidth="md" className={classes.detailsContainer}>
        
        <IndividualPost post={post} />
        
        <div className="" onClick={handleClick}>
            <Typography variant="h2" className={classes.information_h3}>Ver datos de contacto <RiArrowDownCircleFill /></Typography> 
            {click ? <ShowResults />: null}
        </div>
        <StyledBtn onClick={() => history.push('/animal-list')}>Volver</StyledBtn>
        </Container> 

    )
}
