import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import adoptr from '../../images/adoptr.png'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  Link } from 'react-router-dom'
import { Tabs, Tab, Button, useMediaQuery } from '@material-ui/core'
import { AiOutlineUserAdd } from 'react-icons/ai'

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
            padding: ".3rem"
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
    }
}));

export const NavBar = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
        <AppBar position="fixed" className={classes.appBarStyle} elevation={0}>
            <Toolbar disableGutters>
            <Button component={Link} to="/" disableRipple classes={{root : classes.buttonIcon}}>
               <img src={adoptr} alt="logo-img" className={classes.logo}/>
            </Button>
               <Tabs className={classes.tabsContainer}
               indicatorColor="secondary">
                        <Tab className={classes.tab} label="Inicio" to="/" component={Link}/>
                        <Tab className={classes.tab} label="Quienes somos" to="/" component={Link}/>
               </Tabs>
               <Tabs className={classes.tabContainer}
               indicatorColor="secondary">
                   {matches ? 
                   <>
                    <AiOutlineUserAdd className={classes.iconUser}/>
                   
                    </>
                   :
                   <>
                   <Tab className={classes.tab} label="Iniciar sesion" to="/login" component={Link}/>
                   <Tab className={classes.tab} label="Crear cuenta" to="/register" component={Link}/>
                   </>
                   }
                       
               </Tabs>
            </Toolbar>
        </AppBar>
        
        <div className={classes.toolbarMargin} />
        </>
    )
}
