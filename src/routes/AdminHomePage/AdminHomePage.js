import React, { Component } from 'react'
import './AdminHomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import RequestList from '../../components/RequestList/RequestList'

export default class AdminHomePage extends Component{
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
    
      handleSubmit = () => {
          const {history} = this.props
          history.push('/add-shifts')
      }

    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h3>Admin HomePage</h3>
                <button 
                    onClick={this.handleSubmit}>
                    Add New Shift
                </button>
                <div className="code-req-list">
                    <h3>Race Code Requests:</h3>
                    <RequestList></RequestList>
                </div>
            </div>   
        )
    }
}