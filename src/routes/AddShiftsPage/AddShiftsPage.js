import React, { Component } from 'react'

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
                <h3>Add New Shift</h3>
                <button onClick={this.handleSubmit}>Add Shift</button>
            </div>
            
        )
    }
}