import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RequestForm from '../../components/RequestForm/RequestForm'
import './RequestPage.css'

export default class RequestPage extends Component{
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
    static defaultProps = {
        history: {
          push: () => {},
        },
      }

    handleRequestShift = ev =>{
        ev.preventDefault()
        const {history} = this.props
        history.push('/home')
    }
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                <h3>Request a race credit</h3>
                <RequestForm
                  onClick={this.handleRequestShift}></RequestForm>
            </div>
        )
    }
}