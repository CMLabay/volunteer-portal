import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component{
    state = {
        userType: ''
    }
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
      changeType = (type) => {
          console.log('type',type)
          let newType = type;
          this.setState({
              userType: newType
          });
      }

  componentDidUpdate(){
    let destination = '/home'
    if(this.state.userType === 'admin'){
        destination = '/admin'
    }
    const { history } = this.props
    history.push(destination)
  }

    render(){
        return(
          <Section className='LoginPage'>
            <h2>Login</h2>
            <LoginForm
              username={this.state.userType}
              clickHandler={this.changeType}
            />
          </Section>
        )
    }
}