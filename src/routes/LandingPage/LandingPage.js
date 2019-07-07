import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import SummaryList from '../../components/SummaryList/SummaryList'
import TokenService from '../../services/token-service'
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

      componentDidUpdate(){
          if(!TokenService.hasAuthToken() && this.state.navLinks[1].link === 'Logout'){
              this.checkToken()
          }
      }

      checkToken = () => {
        let navLinks = []
        if(!TokenService.hasAuthToken()){
            navLinks = [
              {
                  link:"Register", 
                  route:"register"
              },
              {
                  link:"Login",
                  route:"login"
              }
            ]
        } else {
            navLinks = [
                {
                    link:"Home",
                    route: "home"
                },
                {
                    link:"Logout",
                    route:"/"
                },
            ]
        }
        this.setState({ navLinks })
      }

      componentDidMount(){
          //if a user is logged in, render a logout/home link, else, render login/register
          this.checkToken()
      }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h2 className="pageHeader">Volunteer Portal</h2>
                <p>Signup for shifts, manage your points.</p>
                <SummaryList></SummaryList>
                <section>
                    <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}></RegistrationForm>
                </section>
            </div>
        )
    }
}