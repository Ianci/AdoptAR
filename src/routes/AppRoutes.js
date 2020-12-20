import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import { theme } from '../styles/Theme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { Adoption } from '../components/adoption/Adoption';
export const AppRoutes = () => {
    return (
        
        <ThemeProvider theme={theme}>
            
        <Router>
            <div>
            <Switch>
            <Route  exact path="/"  component={Home}/>
            <Route  path="/register"  component={Register}/>
            <Route  path="/login"  component={Login}/>
            <Route path="/adoption" component={Adoption}/>
            <Redirect to="/" />

            </Switch>
            </div>
        </Router>
        </ThemeProvider>
    )
}
