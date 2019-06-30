import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./UserHomePage.css"
import ShiftList from '../../components/ShiftList/ShiftList';
import UserContext from '../../contexts/user-context'

export default class UserHomePage extends Component{
    state = { 
        userId:"",
        navLinks: [
            {
                link:"Logout",
                route:"/"
            }
        ]
    }
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
      setUser = (userId) => {
        this.setState({ userId })
      }

      handleRequest = () => {
          const {history} = this.props
          history.push('/request')
      }

      handleSignUp = () => {
        const {history} = this.props
        history.push('/shifts')
    }
    static contextType = UserContext;
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h3>Hey there, {this.context.name}!</h3>
                <p>Current Credits: {this.context.credits}</p>
                <button onClick={this.handleSignUp}>Sign up for a shift</button>
                <button onClick={this.handleRequest}>Request a race credit</button>
                <div className="my-shifts">
                    <h3>My Upcoming Shifts:</h3>
                    <ShiftList className="signedUp" userId={this.context.userId}></ShiftList>
                </div>
            </div>
        )             
    }
}