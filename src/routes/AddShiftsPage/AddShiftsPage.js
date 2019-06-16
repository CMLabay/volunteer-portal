import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AddShiftForm from '../../components/AddShiftForm/AddShiftForm'

export default class AddShiftsPage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleSubmit = () => {
          console.log('shift added')
          const {history} = this.props
          history.push('/admin')
      }
    render(){
        return(
            <div>
                <NavBar></NavBar>
                <h3>Add New Shift</h3>
                <AddShiftForm addShift={this.handleSubmit}></AddShiftForm>
                <button onClick={this.handleSubmit}>Add Shift</button>
            </div>
            
        )
    }
}