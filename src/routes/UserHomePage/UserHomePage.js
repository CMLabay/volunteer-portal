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
    setUser = () => {
        if(this.context.userId !== ''){
            window.sessionStorage.setItem('UserID', this.context.userId)
            window.sessionStorage.setItem('UserName', this.context.name)
            window.sessionStorage.setItem('UserCredits', this.context.credits)
            let userId = window.sessionStorage.getItem('UserID')
            let name = window.sessionStorage.getItem('UserName')
            let credits = window.sessionStorage.getItem('UserCredits')
            this.context.setUser(userId, name, credits)
        } 
    }

    componentDidMount(){
        //set and update user info
        this.setUser()
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
                <h3>Hey there, {window.sessionStorage.getItem('UserName')}!</h3>
                <p>Current Credits: {window.sessionStorage.getItem('UserCredits')}</p>
                <button onClick={this.handleSignUp}>Sign up for a shift</button>
        {/*<button onClick={this.handleRequest}>Request a race credit</button>*/}
                <div className="my-shifts">
                    <h3>My Upcoming Shifts:</h3>
                    <ShiftList className="signedUp" userId={this.context.userId === '' ? window.sessionStorage.getItem('UserID') : this.context.userId}></ShiftList>
                </div>
            </div>
        )             
    }
}