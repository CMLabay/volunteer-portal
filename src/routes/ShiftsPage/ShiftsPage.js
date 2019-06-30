import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ShiftList from '../../components/ShiftList/ShiftList'
import RaceDropDown from '../../components/RaceDropDown/RaceDropDown';
import './ShiftsPage.css'
import UserContext from '../../contexts/user-context'

export default class ShiftsPage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

      state = { 
        raceId:1,
        userId:'',
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
    
    onChange = (ev) => {
        let raceId = ev.target.value
        this.setState({ raceId })
    }

    static contextType = UserContext;
    render(){
        return(
            <div>
                <NavBar 
                    className="navbar" 
                    navLinks={this.state.navLinks}>
                </NavBar>
                <h3>Sign up for a shift</h3>
                <label htmlFor='shiftRaceName'>
                    Select a race:
                </label>
                <RaceDropDown 
                    name="shiftRaceName"
                    onChange={this.onChange}>
                </RaceDropDown>  
                <ShiftList 
                    className="shift-list"
                    raceId = {this.state.raceId}>
                </ShiftList>
            </div>
        )
    }
}