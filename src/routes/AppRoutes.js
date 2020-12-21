import React from 'react'
//Rrd
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//Components
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { Adoption } from '../components/sections/adoption/Adoption';
//Material

import { ContainerHome } from '../styles/components/home/home'



export const AppRoutes = () => {
    
    
    return (
        
       
            
        <Router>
            <ContainerHome>
            <div>
            <Switch>
            <Route  exact path="/"  component={Home}/>
            <Route  path="/register"  component={Register}/>
            <Route  path="/login"  component={Login}/>
            <Route path="/home" component={Adoption}/>
            <Redirect to="/" />

            </Switch>
            </div>
            </ContainerHome>
        </Router>
        
    )
}
