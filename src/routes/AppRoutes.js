import React from 'react'
//Rrd
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//Components
import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { Adoption } from '../components/sections/adoption/Adoption';
import { RegisterSucesFull } from '../components/register/RegisterSucesFull'
import { LoginSucesFull } from '../components/login/SuccesFullLogin'
import { AnimalSection } from '../components/sections/animals/AnimalSection'
import { NewPostForm } from '../components/sections/animals/NewPostForm'

//Material
import { PublicRoute } from '../routes/PublicRoutes'
import { PrivateRoute } from '../routes/PrivateRoutes'
import { ContainerHome } from '../styles/components/home/home'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { AdoptionDetails } from '../components/sections/animals/AdoptionDetails';



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
            <PublicRoute  path="/login"  isAuthenticated={isLogged} component={Login}/>
            <Route path="/home" component={Adoption}/>
            <Route path="/succesfull-register" component={RegisterSucesFull} />
            <Route path="/succesfull-login" component={LoginSucesFull} />
            <Route path="/animal-list" component={AnimalSection} />
            <Route exact path="/adoption/:id" component={AdoptionDetails} />
            <PrivateRoute path="/new-post" isAuthenticated={isLogged} component={NewPostForm} />
            <Redirect to="/" />

            </Switch>
            </div>
            </ContainerHome>
        </Router>
        
    )
}
