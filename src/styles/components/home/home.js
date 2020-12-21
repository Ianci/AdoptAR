import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



export const ContainerHome = withStyles(theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
      minHeight: '100vh',
      [theme.breakpoints.down('xs')] : {
        maxWidth : "60rem",
        maxHeight: '70vw',
     },
    [theme.breakpoints.down('md')]: {
        maxWidth : "96rem",
        maxHeight: '70vw',
     },
     
     [theme.breakpoints.up('lg')]: {
        maxWidth : "128rem",
        maxHeight: '70vw',
     },
     [theme.breakpoints.up('xl')]: {
        maxWidth : "128rem"
     },
    },
    label: {
      textTransform: 'uppercase',
    },
  }))(Container);


export const ContainerDiv = withStyles(theme => ({
    root: {
        maxHeight: '100vh',
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')] : {
            maxWidth : "60rem",
            color: "white",
            padding: 0
         },
        [theme.breakpoints.up('md')]: {
            maxWidth : "96rem",
            
         },
         
         [theme.breakpoints.up('lg')]: {
            maxWidth : "128rem",
            padding: theme.spacing(3),
            
         },
         [theme.breakpoints.up('xl')]: {
            maxWidth : "128rem",
            padding: theme.spacing(3),
         },
    }
 }))(Container);