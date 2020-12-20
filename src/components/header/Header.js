import React from 'react'
import { NavBar } from './NavBar'
import  section2  from '../../images/section2.svg'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


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
        color: theme.palette.primary.main,
        fontSize: "4rem",
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')] : {
            fontSize: "2rem",
            padding: theme.spacing(0),
            textAlign: "center"
         },
    },
    h2Title: {
        fontSize: "2.5rem",
        padding: theme.spacing(1),
        color: theme.palette.primary.light,
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
    }
}))
export const Header = () => {
    const classes = useStyles()
    return (
        <>
        <NavBar />
        <section className={classes.sectionOne}>
        <div className={classes.sectionContainer}>
        <div className="">

        <Typography variant="h1" component="h1" className={classes.h1Title}>Somos Adopt<span className={classes.spanAR}>AR</span></Typography>
        <Typography variant="h2" component="h4" className={classes.h2Title}>Tu portal para adoptar o publicar un animal en adopción</Typography>
        </div>
        
       

        <img src={section2} alt="section-img" className={classes.imgSection}/>
        
        </div>
        </section>
        </>
    )
}