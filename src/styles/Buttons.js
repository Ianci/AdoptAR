
import {  withStyles } from '@material-ui/core/styles';
import {Button, TextField }from '@material-ui/core';
import {  purple } from '@material-ui/core/colors';



export const StyledBtn = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      margin: theme.spacing(1),
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'yellow',
        },
      },
    },
  })(TextField);



  
  export const BackButton = withStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: theme.spacing(1)
    },
  }))(Button);