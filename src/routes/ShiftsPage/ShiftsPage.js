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

    state = { navLinks: ['Home', 'Logout'] }

    handleClick = () => {
        console.log('shift successfully taken')
        const {history} = this.props
        //push is not working
        history.push('/home')
    }

    render(){
        console.log('state', this.state.navLinks)
        return(
            <div>
                {/*add links in as props */}
                <NavBar navLinks={this.state.navLinks}>
                    {Object.keys(this.state.navLinks)
                    .map(key => {
                        return(<li key={key}>{this.state.navLinks[key]}</li>)
                    })}
                </NavBar>
                <h3>Sign up for a shift</h3>
                <ShiftList onClick={this.handleClick} className="shift-list"></ShiftList>
            </div>
        )
    }
}