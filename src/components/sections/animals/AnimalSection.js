import React, { useState, useEffect } from 'react'
import { Container, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import adoptr from '../../../images/adoptr.png'
import { Link, useHistory } from 'react-router-dom';
import { StyledBtn } from '../../../styles/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { startLogOut } from '../../../actions/auth';
import { db, firebase } from '../../../firebase/config'

const useStyles = makeStyles(theme => ({
    container: {
        background:"#D90368",
        margin: "0 auto",
        minHeight: "70vw",
        boxShadow: "0px 12px 30px rgba(0,0,0,0.3)"
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
         },
         [theme.breakpoints.down('xs')] : {
            height: "5rem",
            width: "5rem"
         }
    },
    navBar: {
        display: "flex",
        padding: theme.spacing(1),
        height: "10rem",
        alignItems: "center",
        position: "relative",
        justifyContent: "space-between",
    },
  
    leftContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rightContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    nav_tab: {
        ...theme.typography.tab,
        color: theme.palette.primary.main,
        padding: theme.spacing(.3),
        textShadow: '0px 3px 20px rgba(0,0,0,0.5)',
        transition: "all .3s ease-out",
        "&:hover": {
        transform: "scale(1.05)"
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
   
}))

export const AnimalSection = () => {
    const [ data, setData] = useState([])
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const reduxState = useSelector(state => state.auth)
    const { isLogged } = reduxState

    //Get posts 
    useEffect(async() => {
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
        setData(post)
    }

    //Logout Function
    const startLogOutFn = () => {
        dispatch(startLogOut())
    }

    return (
        <Container maxWidth="lg" className={classes.container} disableGutters>
            
                <nav className={classes.navBar}>
                <div className={classes.leftContent}>

                <img src={adoptr} alt="adopt" className={classes.adoptrLogo}/>
                <Link to="/" className={classes.linkUser}><Typography  variant="h3" className={classes.nav_tab}>Home</Typography></Link>
                {isLogged &&  <StyledBtn type="button" className={classes.publishedBtn}onClick={()=> history.push('/new-post')}>Publicar</StyledBtn>}
                </div>
                <div className={classes.rightContent}>
                    {isLogged ? 
                    <Typography  variant="h3" className={classes.nav_tab} onClick={startLogOutFn}>Cerrar sesion</Typography>
                    :
                    <>
                     <Link to="/login" className={classes.linkUser}><Typography variant="h3" className={classes.nav_tab}>Iniciar sesion</Typography></Link>
                     <Link to="/register" className={classes.linkUser}><Typography  variant="h3" className={classes.nav_tab}>Crear cuenta</Typography></Link>
                    </>
                    }
                      <TextField
                        id="outlined-secondary"
                        label="Outlined secondary"
                        variant="outlined"
                        color="secondary"
                        classes={{root: classes.root}}
                    />
                </div>
                </nav>
            

        </Container>
    )
}
