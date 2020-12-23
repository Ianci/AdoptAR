import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import './card.css'
import { dataExperience } from './dataExperiences';

const useStyles = makeStyles(theme=> ({
    sectionContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        height: "65vw",
        [theme.breakpoints.down('md')]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr" ,
         },
         [theme.breakpoints.down(1300)] : {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "35rem",
            
         },
        
    },
    h2Expe: {
        ...theme.typography.tab,
        color: theme.palette.primary.main,
        textShadow: "0px 15px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
    },
    h3Expe: {
        ...theme.typography.tab,
        color: "yellow",
        textShadow: "0px 15px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
    },
    paragraph: {
        ...theme.typography.tab,
        color: theme.palette.primary.dark,
        textShadow: "0px 15px 8px rgba(0,0,0,0.2)",
        textAlign: "center"
    },
    card: {
        margin: "10rem auto 0",
        width: "400px",
        height: "400px",
     
         [theme.breakpoints.down(800)] : {
            width: "100%",
            margin: theme.spacing(1),
            
         },
        

    },
    card__inner: {
        width: "100%",
        height: "100%",
        transition: "transform 1s",
        transformStyle: "preserve-3d",
        cursor: "pointer",
        position: "relative"
    },
    card__inner_flipped: {
        transform: "rotateY(180deg)",
        width: "100%",
        height: "100%",
        transition: "transform 1s",
        transformStyle: "preserve-3d",
        cursor: "pointer",
        position: "relative",
    },
    card__img_front: {
        display: "block",
        width: "12rem",
        height: "12rem",
        margin: "0 auto 3rem",
        borderRadius: "50%",
        objectFit: "cover",
        border: "5px solid #fff",
        backgroundColor: "#fff",
        transition: "all .3s ease-out"
    },
    card__img_back: {
        display: "block",
        width: "12rem",
        height: "12rem",
        margin: "0 auto 3rem",
        borderRadius: "50%",
        objectFit: "cover",
        border: "5px solid #fff",
        backgroundColor: "#fff",
        transition: "all .3s ease-out",
        "&:hover": {
            transform: "scale(1.10)"
        },
        card__content: {
            width: "100%",
            height: "100%"
        }
    },
   
}));


export const Experiences = () => {
    const classes = useStyles()
    const [ click, setClick ] = useState(false)
    const isClicked = ( ) => {
        setClick(!click)
    }
    return (
        <>
        <section className={classes.sectionExperience}>
            <div className={classes.sectionContainer}>
            {dataExperience.map(data =>(
                <div className={classes.card}>
                <div className={click ? classes.card__inner_flipped : classes.card__inner} onMouseEnter={isClicked} onMouseLeave={isClicked}>
                    <div className="card__face card-front">
                        <img src={data.image} alt="" className={classes.card__img_front}/>
                        <Typography variant="h2" className={classes.h2Expe}>{data.name}</Typography>
                        <br/>
                        <Typography variant="h2" className={classes.h2Expe}>Adoptante: 
                            <Typography variant="h2" className={classes.h3Expe}>
                            {data.adoptante}
                            </Typography>
                        </Typography>
                    </div>
                    <div className="card__face card-back">
                        <div className={classes.card__content}>
                            <div className="card__header">
                                <img src={data.image} alt="card" className={classes.card__img_back}/>
                            </div>
                            <div className="card__body">
                                <Typography variant="h3"  className={classes.h2Expe}>Toby</Typography>
                                <Typography variant="body1" className={classes.paragraph}>"{data.body}"</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))}
              

            </div>
        </section>
      
        </>
    )
}
