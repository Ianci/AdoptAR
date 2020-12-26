import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { HiMenu } from 'react-icons/hi';
import { Tabs, Tab, useMediaQuery} from '@material-ui/core'
import {  Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './sidebar.css'

const useStyles = makeStyles(theme => ({
    iconUser: {
        position: "fixed",
        top: "1.9rem",
        zIndex: 9999,
        left: "19.6rem",
        color: "white",
        fontSize: "1.6rem",
        right: "1rem",
        [theme.breakpoints.up(599)]: {
            left: "25.6rem",
            paddingBottom: theme.spacing(.2)
         },
        [theme.breakpoints.between('small','sm')]: {
            left: "19.6rem",
            paddingBottom: theme.spacing(.2)
         },
         
         [theme.breakpoints.down(362)]: {
            left: "15.6rem",
            paddingBottom: theme.spacing(.2)
         },
    },
    sideBarContainer: {
   
        maxWidth: "150px"
    },
    tabSidebar: {
        width: "100%"
    }
}));



export const SideBar = () => {
    const classes = useStyles()
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click);
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("xs"))
    const reduxState = useSelector(state => state.auth)
    const { isLogged } = reduxState
    return (
        <>
        <div className={click ? 'sidebarActive' : 'sidebarInactive'}>
        <Tabs className={classes.sideBarContainer} indicatorColor="secondary" orientation="vertical" centered>
        
                    <Tab className={classes.tabSidebar} label="Inicio" to="/" component={Link} onClick={handleClick}/>
                    <Tab className={classes.tabSidebar} label="Quienes somos" to="/" component={Link} onClick={handleClick}/>
                    {isLogged ? 
                                        <Tab className={classes.tabSidebar} label="Cerrar sesion" to="/" component={Link} onClick={handleClick}/>
                    :
                    <>
                    <Tab className={classes.tabSidebar} label="Iniciar sesion" to="/login" component={Link} onClick={handleClick}/>
                    <Tab className={classes.tabSidebar} label="Crear cuenta" to="/register" component={Link} onClick={handleClick}/>
                    </>
                    }
                    
        </Tabs>
        </div>
        {matches &&
        <HiMenu className={classes.iconUser} onClick={handleClick}/>
        }
        </>
    )
}
