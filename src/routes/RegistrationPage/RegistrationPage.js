import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import NavBar from '../../components/NavBar/NavBar'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component{
  state = { 
    navLinks: [
        {
            link:"Back", 
            route:"/"
        },
        {
            link:"Login",
            route:"login"
        }
    ]
}
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
        //log the user in automatically, instead of going to login page
      }

    render(){
        return(
          <Section className='RegistrationPage'>
            <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
            <h2>Register</h2>
            <RegistrationForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
          </Section>
        )
    }
}