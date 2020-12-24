import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { AiFillFacebook } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr';
import adoptr from '../../images/adoptr.png'



const useStyles = makeStyles(theme=> ({
    footerContainer: {
        height: "40vh",
        background: theme.palette.primary.dark,
        margin: "-3rem",
        display: "flex",
        position: "absolute",
        width: "100%",
        top: "210rem",
        justifyContent: "center",
        [theme.breakpoints.between('small', 'md')] : {
            top: "275rem",
         },
        [theme.breakpoints.down(700)] : {
            height: "126vw",
            width: "104%",
            marginTop: "-40rem"
         },
         
    },
    footer_grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        [theme.breakpoints.down(700)] : {
            gridTemplateColumns: "1fr",
            
         },
    },
    footer_h1: {
        fontSize: "1.5rem",
        color: "white",
        letterSpacing: 1.3333,
        padding: theme.spacing(1)
    },
    icon: {
        gridColumnStart: "2",
        gridColumnEnd: "2",
        color: "white",
        fontSize: "3rem",
        margin: ".8rem",
        "&:hover":{
            transform: "translateY(-5px)"
        }
    },
    adoptrLogo: {
        position: "block",
        width: "15rem",
        height: "15rem",
        animation: "$fadeIn 1s ease-in-out",
        [theme.breakpoints.down('md')]: {
            height: "9rem",
            width: "9rem",
         },
         [theme.breakpoints.down('xs')] : {
            height: "5rem",
            width: "5rem"
         }
    }
}));
export const Footer = () => {
    const classes = useStyles()
    return (
            <> 
        <div className={classes.footerContainer}>
        <div className={classes.footer_grid}>
            <div className="">
                <img src={adoptr} alt="adopt" className={classes.adoptrLogo}/>
            </div>
            <div className="">

            <Typography variant="h1" className={classes.footer_h1}>Contacto</Typography>
            <Typography variant="h1" className={classes.footer_h1}>El equipo</Typography>
            <Typography variant="h1" className={classes.footer_h1}>Inicio</Typography>
            </div>
            <div className="">
            <Typography variant="h1" className={classes.footer_h1}>Colaborá con nosotros</Typography>
            <Typography variant="h1" className={classes.footer_h1}>Nuestros animales</Typography>
            <AiFillFacebook className={classes.icon}/>
            <IoLogoTwitter className={classes.icon}/>
            <GrInstagram className={classes.icon}/>
            </div>
        </div>
        </div>
       
      
    </>
    )
}
