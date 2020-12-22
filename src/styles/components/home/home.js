import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



export const ContainerHome = withStyles(theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)',
      minHeight: '100vh',
      [theme.breakpoints.down('xs')] : {
        maxWidth : "60rem",
        maxHeight: '90vw',
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


