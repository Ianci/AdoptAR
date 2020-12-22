import React, { useState } from 'react'
import { dataCarrousel } from './Data'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import './carousel.css'
const useStyles = makeStyles(theme=> ({
    carouselSection: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        
       padding: theme.spacing(2),
        width: "100%",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.between('small', 'sm')]: {
            display: "block",
            marginTop: "12rem",
           
          
        },
    },
    imgCarousel: {
        width: "100%",
        borderRadius: '2rem',
        boxShadow: "0 1.5rem 4rem rgba(0, 0, 0, 0.5)",
    },
    arrowCarouselLeft: {
        position: "absolute",
        fontSize: "5rem",
        color: "white",
        top: "20rem",
        left: "20rem",
        cursor: "pointer",
        transition: "all .3s ease",
        [theme.breakpoints.between('small', 'sm')]: {
            fontSize: "2rem",
            top: "6rem",
            left: "2rem",
          
        },
        zIndex: 6,
        "&:hover": {
            transform: "scale(1.15)"
        }
    },
    arrowCarouselRight: {
        position: "absolute",
        fontSize: "5rem",
        color: "white",
        top: "20rem",
        left: "82.5rem",
        cursor: "pointer",
        transition: "all .3s ease",
        zIndex: 6,
        [theme.breakpoints.between('small', 'sm')]: {
            fontSize: "2rem",
            top: "6rem",
            left: "15.4rem",
         
        },
        "&:hover": {
            transform: "scale(1.15)"
        }
    }
}))
export const Carrousel = ({ slides }) => {
    const [ current, setCurrent ] = useState(0)
    const classes = useStyles()
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <>
        <section className={classes.carouselSection}>
        <FaArrowAltCircleRight className={classes.arrowCarouselLeft} onClick={prevSlide}/>
        <FaArrowAltCircleLeft  className={classes.arrowCarouselRight}  onClick={nextSlide}/>
        {dataCarrousel.map((slide, index)=>{
            return(
                <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && 
                        (<img src={slide.image} alt="carrousel" className={classes.imgCarousel}/>)
                        }
                </div>
                )
            })}
        </section>
        </>
    )
}
