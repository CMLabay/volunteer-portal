import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default class UserHomePage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    
      handleRequest = () => {
          console.log('go to request credit')
          const {history} = this.props
          history.push('/request')
      }
      handleSignUp = () => {
        console.log('go to sign up for shift')
        const {history} = this.props
        history.push('/shifts')
    }
    render(){
        return(
            <div>
                {/*add links in as props */}
                <NavBar></NavBar>
                <h3>User HomePage</h3>
                <button onClick={this.handleSignUp}>Sign up for a shift</button>
                <button onClick={this.handleRequest}>Request a race credit</button>
            </div>
        )
    }
}