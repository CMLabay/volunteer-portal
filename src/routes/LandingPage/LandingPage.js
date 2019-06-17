import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import SummaryList from '../../components/SummaryList/SummaryList'
import './LandingPage.css'

export default class LandingPage extends Component{
    state = { 
        navLinks: [
            {
                link:"Register", 
                route:"register"
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
      }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2 className="pageHeader">Volunteer Portal</h2>
                <SummaryList></SummaryList>
                <section>
                    <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}></RegistrationForm>
                </section>
            </div>
        )
    }
}