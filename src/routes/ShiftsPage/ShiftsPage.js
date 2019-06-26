import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ShiftList from '../../components/ShiftList/ShiftList'
import RaceDropDown from '../../components/RaceDropDown/RaceDropDown';
import './ShiftsPage.css'

export default class ShiftsPage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

      state = { 
        raceId:1,
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
    onChange = (ev) => {
        console.log('value', ev.target.value)
        let raceId = ev.target.value
        this.setState({ raceId })
    }

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
                    onClick={this.handleClick} 
                    className="shift-list"
                    raceId = {this.state.raceId}>
                </ShiftList>
            </div>
        )
    }
}