import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import adoptar1 from '../../../images/adoptar1.jpg'
import adoptar2 from '../../../images/adoptar2.jpg'
import adoptar3 from '../../../images/adoptar3.jpg'
const useStyles = makeStyles(theme => ({
    container: {
        minHeight: "60vh",
        height: "65vh",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        margin: "0 auto",
        color: "yellow",
        [theme.breakpoints.between('xs', 'sm')]: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
         },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
         },
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem",
        [theme.breakpoints.down('md')]: {
           marginBottom: "6rem"
        },
        [theme.breakpoints.down('xs')] : {
           marginBottom: "6.25rem"
        },
        [theme.breakpoints.up('lg')] : {
            marginBottom: "2rem"
         }
    },
    sectionRight: {
        position: "relative",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column"
         },
    },
    img1Section: {
        position: "absolute",
        width: "18rem",
        height: "17rem",
        top: 0,
        left: 0,
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.5)",
        borderRadius: "1.3rem",
        zIndex: 5,
        transition: "all .3s ease-out",
        padding: theme.spacing(.5),
        marginBottom: "3rem",
        [theme.breakpoints.between('small', 'sm')]: {
            width: "8rem",
            height: "8rem",
            top: 0,
            left: "3rem"
         },
        [theme.breakpoints.down(530)]: {
            width: "6rem",
            height: "6rem",
            top: 0,
            left: "-1rem",
            margin: theme.spacing(1),
            padding: theme.spacing(.1)
            
         },
        "&:hover":{
            transform: "scale(1.10)",
            zIndex: 6
        }
    },
    img2Section: {
        position: "absolute",
        width: "18rem",
        height: "17rem",
        top: "5rem",
        left: "12rem",
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.5)",
        borderRadius: "1.3rem",
        transition: "all .3s ease-out",
        zIndex: 5,
        padding: theme.spacing(.5),
        [theme.breakpoints.between('small', 'sm')]: {
            width: "8rem",
            height: "8rem",
            top: 0,
            left: "20rem"
         },
        [theme.breakpoints.down(530)]: {
            width: "6rem",
            height: "6rem",
            top: 0,
            left: "6rem",
            margin: theme.spacing(1),
            padding: theme.spacing(.1)
         },
        "&:hover":{
            transform: "scale(1.10)",
            zIndex: 6
        }
    },
    img3Section: {
        position: "absolute",
        width: "18rem",
        height: "17rem",
        top: "12rem",
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.5)",
        borderRadius: "1.3rem",
        left: "5rem",
        zIndex: 5,
        transition: "all .3s ease-out",
        padding: theme.spacing(.5),
        [theme.breakpoints.between('small', 'sm')]: {
            width: "8rem",
            height: "8rem",
            top: 0,
            left: "11rem"
         },
        [theme.breakpoints.down(530)]: {
            width: "6rem",
            height: "6rem",
            top: 0,
            left: "13rem",
            margin: theme.spacing(1),
            padding: theme.spacing(.1)
            
         },
        "&:hover":{
            transform: "scale(1.10)",
            zIndex: 6
        }
    },
    sectionLeft: {
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    h1typ: {
        ...theme.typography.tab,
        letterSpacing: 1.3333,
        fontSize: "4rem",
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5rem",
            marginBottom: "4rem",
            textAlign: "center",
            
         },
      
    },
    h2typ: {
        ...theme.typography.tab,
        color: theme.palette.primary.dark,
        padding: theme.spacing(.5),
        [theme.breakpoints.down('xs')]: {
            fontSize: ".7rem",
            padding: theme.spacing(.5),
         },
      
    },
 
}))

export const Adoption = () => {
    const classes = useStyles()
    return (
        <>
    <div className={classes.toolbarMargin} />
    <section>
        <div className={classes.container}>
            <div className={classes.sectionLeft}>
            <Typography variant="h1" className={classes.h1typ}>¿Por qué adoptar y no comprar?</Typography>
            <Typography variant="body1" className={classes.h2typ}>
            Porque adoptando estás salvando la vida de un animal rescatado. 
            
            </Typography>
            <Typography variant="body1" className={classes.h2typ}>Cada perro adoptado deja su lugar para que ingrese otro y pueda ser recuperado en el refugio.  </Typography>
            <Typography variant="body1" className={classes.h2typ}> 
            Adoptar es un acto de amor y de responsabilidad, por eso es necesario estar completamente seguros de que estamos capacitados y listos para tener un perro. Un animal de compañía dependerá toda su vida de nosotros. Recordá que un perro puede 
            vivir entre 10 y 20 años y estás asumiendo un compromiso serio por todo ese tiempo.
            </Typography>
            </div>
            <div className={classes.sectionRight}>
                <figure>
                <img src={adoptar1} alt="adoptr" className={classes.img1Section}/>
                <img src={adoptar2} alt="adoptr" className={classes.img2Section}/>
                <img src={adoptar3} alt="adoptr" className={classes.img3Section}/>
                </figure>
                
            </div>
        </div>
       
    </section>
    </>
    )
}
