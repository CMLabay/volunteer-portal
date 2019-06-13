import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import UserHomePage from '../../routes/UserHomePage/UserHomePage'
import ShiftsPage from '../../routes/ShiftsPage/ShiftsPage'
import RequestPage from '../../routes/RequestPage/RequestPage'
import AdminHomePage from '../../routes/AdminHomePage/AdminHomePage'
import AddShiftsPage from '../../routes/AddShiftsPage/AddShiftsPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render(){
    return (
      <main className='App'>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <Route 
            path={'/home'}
            component={UserHomePage}
          />
          <Route 
            path={'/shifts'}
            component={ShiftsPage}
          />
          <Route 
            path={'/request'}
            component={RequestPage}
          />
          <Route 
            path={'/admin'}
            component={AdminHomePage}
          />
          <Route 
            path={'/add-shifts'}
            component={AddShiftsPage}
          />
          <Route 
            path={'/login'}
            component={LoginPage}
          />
          <Route 
            path={'/register'}
            component={RegistrationPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    );
  }
  }


export default App;
