import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AddShiftForm from '../../components/AddShiftForm/AddShiftForm'

export default class AddShiftsPage extends Component{
    state = { 
        navLinks: [
            {
                link:"Home", 
                route:"admin"
            },
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
    
      handleSubmit = () => {
          const {history} = this.props
          history.push('/admin')
      }
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h3>Add New Shift</h3>
                <AddShiftForm addShift={this.handleSubmit}></AddShiftForm>
            </div>
            
        )
    }
}