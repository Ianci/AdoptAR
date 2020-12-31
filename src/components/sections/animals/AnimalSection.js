import React, { useState, useEffect } from 'react'
import { Container, Typography, TextField, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import adoptr from '../../../images/adoptr.png'
import { Link, useHistory } from 'react-router-dom';
import { StyledBtn } from '../../../styles/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { startLogOut } from '../../../actions/auth';
import { db, firebase } from '../../../firebase/config';
import { LogoutBtn, LoginOptions } from './uiButtons';
import { SearchForm } from './SearchForm'
import { getPostsFromDb } from '../../../actions/post'

const useStyles = makeStyles(theme => ({
    MuiContainer: {
        background:"#D90368",
        margin: "0 auto",
        minHeight: "70vw",
        boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
       
        [theme.breakpoints.down(600)] : {
            maxWidth: "100%",
            margin: 0,
            padding: 0,
           
        }
    },
    adoptrLogo: {
        marginTop: "3rem",
        position: "block",
        width: "12rem",
        height: "12rem",
        animation: "$fadeIn 1s ease-in-out",
        [theme.breakpoints.down('md')]: {
            height: "9rem",
            width: "9rem",
            margin: 0
         },
         [theme.breakpoints.down(600)] : {
            height: "5rem",
            width: "5rem",
            margin: 0
         }
    },
    navBar: {
        display: "flex",
        padding: theme.spacing(1),
        height: "10rem",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
        [theme.breakpoints.down(600)] : {
            
           
        }
    },
  
    leftContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rightContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down(600)] : {
            
           
        }
    },
    nav_tab: {
        ...theme.typography.tab,
        color: theme.palette.primary.main,
        padding: theme.spacing(.3),
        textShadow: '0px 3px 20px rgba(0,0,0,0.5)',
        transition: "all .3s ease-out",
        "&:hover": {
        transform: "scale(1.05)"
        },
        [theme.breakpoints.down(600)] : {
            padding: theme.spacing(.1),
            fontSize: ".9rem"
        }
    },
    linkUser: {
        textDecoration: "none"
    },
    publishedBtn: {
        transition: "all .4 ease-in",
        marginLeft: theme.spacing(1),
        "&:hover" : {
            transform: "translateY(-5px)"
        }
    },
    sideBar: {
        flex: "0 0 40%",
        background: "white",
    },
    main: {
        flex: "1",
        background: "yellow",
    },
    searchFormContainer: {

        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
   
}))

export const AnimalSection = () => {
   
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const reduxState = useSelector(state => state.auth)
    const { isLogged } = reduxState
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down(600))

    //Get posts 
    useEffect(() => {
      const getPosts = ()=> {
        db.collection('posts').orderBy('date', 'desc').onSnapshot(postsSnapshot)
      } 
      getPosts()
    }, [])

    const postsSnapshot = (snapshot) => {
        const post = snapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
       dispatch(getPostsFromDb(post))
    }

    //Logout Function
    const startLogOutFn = () => {
        dispatch(startLogOut())
    }

    return (
        <Container maxWidth="lg" classes={{root: classes.MuiContainer}} disableGutters>
            
                <nav className={classes.navBar}>
                <div className={classes.leftContent}>

                <img src={adoptr} alt="adopt" className={classes.adoptrLogo}/>
                <Link to="/" className={classes.linkUser}><Typography  variant="h3" className={classes.nav_tab}>Home</Typography></Link>
                {isLogged &&  <StyledBtn type="button" className={classes.publishedBtn}onClick={()=> history.push('/new-post')}>Publicar</StyledBtn>}
                </div>
                <div className={classes.rightContent}>
                    
                    {isLogged ? 
                    <LogoutBtn className={classes.nav_tab} onClick={startLogOutFn} />
                    :
                    <LoginOptions />
                    }
                    
                </div>
                </nav>
                <div>
             
                    <SearchForm />
                  
               
                </div>
            

        </Container>
    )
}
