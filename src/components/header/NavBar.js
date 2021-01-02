import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import adoptr from '../../images/adoptr.png'
import { makeStyles } from '@material-ui/core/styles';
import {  Link, useHistory } from 'react-router-dom'
import { Tabs, Button, Typography} from '@material-ui/core'

import { StyledBtn } from '../../styles/Buttons';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "5rem",
        [theme.breakpoints.down('md')]: {
           marginBottom: "3rem"
        },
        [theme.breakpoints.down('xs')] : {
           marginBottom: "3.25rem"
        },
        [theme.breakpoints.up('lg')] : {
            marginBottom: "5rem"
         }
    },
    logo: {
        position: "block",
        width: "12rem",
        height: "12rem",
        animation: "$fadeIn 1s ease-in-out",
        [theme.breakpoints.down('md')]: {
            height: "9rem",
            width: "9rem",
         },
         [theme.breakpoints.down('xs')] : {
            height: "5rem",
            width: "5rem"
         }
    },
    appBarStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        root: {
            boxShadow: "none"
        }
    },
    buttonIcon: {
        padding: 0
    },
    tabsContainer: {
        marginRight: "auto",
        
    },
    tabContainer: {
        marginLeft: "auto",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    tab: {
        padding: "1rem",
        ...theme.typography.tab,
        color: theme.palette.primary.main,
        minWidth: 12,
        marginLeft: theme.spacing(1),
        textShadow: '0px 3px 20px rgba(0,0,0,0.5)',
        transition: "all .3s ease-out",
        "&:hover": {
        transform: "scale(1.20)"
        },
        [theme.breakpoints.down('xs')] : {
            margin: 0,
            padding: ".3rem"
         },
         [theme.breakpoints.down('md')] : {
            margin: 0,
            padding: ".3rem",
            "&:hover": {
                transform: "scale(1.10)"
                },
         }
    },
    iconUser: {
        color: theme.palette.primary.main,
        fontSize: "1.5rem",
        margin: theme.spacing(.5),
        transition: "all .3s ease-out",
        "&:hover": {
        transform: "scale(1.20)"
        }
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
    sideBarActive: {
        color: "green"
       
    },
    sideBarInactive: {
        color: "black"
    },
    btnNav: {
        marginBottom: theme.spacing(.5),
        margin: 0,
        marginLeft: theme.spacing(.8),
    }
}));

export const NavBar = () => {
    const classes = useStyles()
 
    const history = useHistory()
 
   
   
    
  
 
    
    return (
        <>
        <AppBar position="fixed" className={classes.appBarStyle} elevation={0}>
            <Toolbar disableGutters>
            <Button component={Link} to="/" disableRipple classes={{root : classes.buttonIcon}}>
               <img src={adoptr} alt="logo-img" className={classes.logo}/>
            </Button>
               <Tabs className={classes.tabsContainer}
               indicatorColor="secondary"
               >
                 
                     <Typography variant="h3" className={classes.tab} >Inicio</Typography>
                     <StyledBtn type="button" className={classes.btnNav} onClick={() => history.push('/animal-list')}>ADOPCIÓN</StyledBtn>
                     
                   
              
               </Tabs>
              
            </Toolbar>
        </AppBar>
        
        <div className={classes.toolbarMargin} />
        
        </>
    )
}
