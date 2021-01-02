import React from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles';

import { AnimaList } from './AnimaList'

const useStyles = makeStyles(theme => ({
    searchFormContainer: {
      
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    sideBar: {
        width: "320px",
        position: "relative"
    },
    main: {
        flex: "0 0 75%",
        marginTop: theme.spacing(2)
    },
    inputSearch: {
        background: "none",
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
            position: "absolute",
            left: "32px",
            top: "5px"
         },
         [theme.breakpoints.up(600)] : {
            height: "2rem",
            width: "15rem",
            position: "absolute",
            left: "82px",
            top: "5px"
         }
    },
    h2_adoption: {
        ...theme.typography.tab,
        display: "inline",
        color: "white",
        transition: "all .1s ease-out",
        "&:hover" : {
            borderBottom: "3px solid yellow",
        },
        [theme.breakpoints.down(600)] : {
            height: "1rem",
            width: "15rem",
            position: "absolute",
            left: "32px",
            top: "5px",
            "&:hover" : {
                borderBottom: "none",
            },
         },
         [theme.breakpoints.up(600)] : {
            height: "2rem",
            width: "15rem",
            position: "absolute",
            left: "82px",
            top: "5px"
         }
       
    },
    
}))
export const SearchForm = () => {
    const classes = useStyles()
  
    return (
     
     
        <div className={classes.searchFormContainer}>
            <div className={classes.sideBar}>
            <Typography variant="h2" className={classes.h2_adoption}>Adopción</Typography>
          
            </div>
            
            <div className={classes.main}>
               
                <AnimaList />
            </div>
        </div>
          )
}
