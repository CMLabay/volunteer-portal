import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import UserContext from '../../contexts/user-context'

export default class LoginPage extends Component{
    state = {
        userType: '',
        userId:''
    }
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }

    static contextType = UserContext;

    changeType = (type, userId, name, credits) => {
        let newType = type;
        this.context.setUser(userId, name, credits)
        console.log('conte ', this.context)
        this.setState({
            userType: newType,
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