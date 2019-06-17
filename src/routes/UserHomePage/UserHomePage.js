import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./UserHomePage.css"
import ShiftList from '../../components/ShiftList/ShiftList';

export default class UserHomePage extends Component{
    state = { 
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
    
      handleRequest = () => {
          const {history} = this.props
          history.push('/request')
      }
      handleSignUp = () => {
        const {history} = this.props
        history.push('/shifts')
    }
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h3>Christina Labay</h3>
                <p>Current Credits: 5</p>
                <button onClick={this.handleSignUp}>Sign up for a shift</button>
                <button onClick={this.handleRequest}>Request a race credit</button>
                <div className="my-shifts">
                    <h3>My Upcoming Shifts:</h3>
                    <ShiftList className="signedUp"></ShiftList>
                </div>
            </div>
        )
    }
}