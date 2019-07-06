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
import UserContext from '../../contexts/user-context'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'

class App extends Component {
  state = { 
    hasError: false,
    userId:'',
    name:'', 
    credits:0,
    updateFlag: false,
          }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  setUser = (userId, name, credits) => {
    this.setState({ userId, name, credits })
  }
  setUpdateFlag = (updateFlag) => {
    this.setState({ updateFlag })
  }
  updateCredits = (credits) => {
    this.setState({ credits })
  }

  render(){
    const contextValue = {
      userId: this.state.userId,
      name: this.state.name,
      credits: this.state.credits,
      setUser: this.setUser,
      updateFlag: this.state.updateFlag,
      setUpdateFlag: this.setUpdateFlag,
      updateCredits: this.updateCredits,
    }

    return (
      <UserContext.Provider value={contextValue}>
      <main className='App'>
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <PrivateRoute 
            path={'/home'}
            component={UserHomePage}
          />
          <PrivateRoute 
            path={'/shifts'}
            component={ShiftsPage}
          />
          <PrivateRoute 
            path={'/request'}
            component={RequestPage}
          />
          <PrivateRoute 
            path={'/admin'}
            component={AdminHomePage}
          />
          <PrivateRoute 
            path={'/add-shifts'}
            component={AddShiftsPage}
          />
          <PublicOnlyRoute 
            path={'/login'}
            component={LoginPage}
          />
          <PublicOnlyRoute 
            path={'/register'}
            component={RegistrationPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
      </UserContext.Provider>
    );
  }
  }


export default App;
