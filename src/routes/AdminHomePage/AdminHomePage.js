import React, { Component } from 'react'

export default class AdminHomePage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleSubmit = () => {
          console.log('go to add shift')
          const {history} = this.props
          history.push('/add-shifts')
      }
    render(){
        return(
            <div>
                <h3>Admin HomePage</h3>
                <button onClick={this.handleSubmit}>Add New Shift</button>
            </div>   
        )
    }
}