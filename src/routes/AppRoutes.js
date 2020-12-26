import React from 'react'
//Rrd
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//Components
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { Adoption } from '../components/sections/adoption/Adoption';
//Material
import { PublicRoute } from '../routes/PublicRoutes'
import { ContainerHome } from '../styles/components/home/home'
//Redux
import { useDispatch, useSelector } from 'react-redux'



export const AppRoutes = () => {
    const state = useSelector(state => state.auth)
    const { isLogged } = state
    console.log(isLogged)    
    return (
        
       
            
        <Router>
            <ContainerHome>
            <div>
            <Switch>
            <Route  exact path="/"  component={Home}/>
            <PublicRoute  path="/register" isAuthenticated={isLogged} component={Register}/>
            <PublicRoute  path="/login"  isAuthenticated={isLogged}component={Login}/>
            <Route path="/home" component={Adoption}/>
            <Redirect to="/" />

            </Switch>
            </div>
            </ContainerHome>
        </Router>
        
    )
}
