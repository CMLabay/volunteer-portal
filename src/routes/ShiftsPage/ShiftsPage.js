import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ShiftList from '../../components/ShiftList/ShiftList'
import './ShiftsPage.css'

export default class ShiftsPage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

      state = { 
        navLinks: [
            {
                link:"Home", 
                route:"home"
            },
            {
                link:"Logout",
                route:"/"
            }
        ]
    }

    handleClick = () => {
        const {history} = this.props
        history.push('/home')
    }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}>
                </NavBar>
                <h3>Sign up for a shift</h3>
                <ShiftList onClick={this.handleClick} className="shift-list"></ShiftList>
            </div>
        )
    }
}