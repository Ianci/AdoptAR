import React from 'react'
import { NavBar } from './NavBar'
import  section2  from '../../images/section2.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { BackButton, StyledBtn } from '../../styles/Buttons';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    sectionOne: {
        maxHeight: "95vw",
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
         },
        
    },
    sectionContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        
         [theme.breakpoints.down('md')] : {
            display: "flex",
            flexDirection: "column"
         }
    },
    imgSection: {
        width: "35rem",
        height: "35rem",
        animation: "$fadeIn 1s ease-in-out",
        [theme.breakpoints.down('md')] : {
            width: "20rem",
            height: "20rem",
            margin: "2rem auto",
            padding: theme.spacing(1)
         },
        [theme.breakpoints.only('xs')] : {
            width: "15rem",
            height: "15rem",
            margin: "2rem auto",

            padding: theme.spacing(1)
         },
         
       
    },
    h1Title: {
        letterSpacing: 1.5555,
        color: "yellow",
        fontSize: "4rem",
        textAlign: "center",
        ...theme.typography.tab,
        padding: theme.spacing(1),
        animation: "$fadeOut .8s ease-in-out",
        [theme.breakpoints.down('xs')] : {
            fontSize: "2rem",
            padding: theme.spacing(0),
            textAlign: "center"
         },
    },
    h2Title: {
        fontSize: "2.5rem",
        textAlign: "center",  
        ...theme.typography.tab,  
        padding: theme.spacing(1),
        color: theme.palette.primary.light,
        animation: "$fadeIn .5s ease-in-out",
        [theme.breakpoints.down('xs')] : {
            fontSize: "1.2rem",
            
            textAlign: "center"
         },
    },
    spanAR: {
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')] : {
            fontSize: "2rem",
            textAlign: "center"
         },
    },
    "@keyframes fadeIn": {
        "0%": {
          opacity: 0,
          transform: "translateX(10rem)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        },
    },
    "@keyframes fadeOut": {
        "0%": {
          opacity: 0,
          transform: "translateX(-10rem)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        },
    },
    titleContainer: {
        alignSelf: "center",
    },
    btn: {
        width: "50%",
        left: "13rem",
        [theme.breakpoints.up('md')]: {
            left: "8rem"
          },
          [theme.breakpoints.up('lg')]: {
            left: "13rem"
          },
        [theme.breakpoints.down(600)] : {
            width: "100%",
            margin: "0 auto",
            left: ".1rem",
         },
    }
}))
export const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
        <NavBar />
        <section className={classes.sectionOne}>
        <div className={classes.sectionContainer}>
        <div className={classes.titleContainer}>

        <Typography variant="h1" component="h1" className={classes.h1Title}>Somos Adopt<span className={classes.spanAR}>AR</span></Typography>
        <Typography variant="h2" component="h4" className={classes.h2Title}>Tu portal para adoptar o publicar un animal en adopción</Typography>
        <StyledBtn className={classes.btn} type="button" onClick={()=> history.push("/animal-list")}>Ver los animales en adopción</StyledBtn>
        </div>
        
       

        <img src={section2} alt="section-img" className={classes.imgSection}/>
        
        </div>
        </section>
        </>
    )
}
