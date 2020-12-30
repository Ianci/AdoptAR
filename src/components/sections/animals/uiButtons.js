import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
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
            fontSize: ".7rem"
        }
    },
    linkUser: {
        textDecoration: "none"
    }
}))
export const LogoutBtn = (props)=> {
    const classes = useStyles()
    return(
    <Typography  variant="h3" className={classes.nav_tab} onClick={props.onClick}>Cerrar sesion</Typography>
    )
} 

export const LoginOptions = (props) => {
    const classes = useStyles()
    return (
        <div className="">
        <Link to="/login" className={classes.linkUser}><Typography variant="h3" className={classes.nav_tab}>Iniciar sesion</Typography></Link>
        <Link to="/register" className={classes.linkUser}><Typography  variant="h3" className={classes.nav_tab}>Crear cuenta</Typography></Link>
        </div>
    )
}