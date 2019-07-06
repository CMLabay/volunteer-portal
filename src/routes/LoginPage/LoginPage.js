import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import UserContext from '../../contexts/user-context'
import NavBar from '../../components/NavBar/NavBar'

export default class LoginPage extends Component{
    state = {
        userType: '',
        userId:'',
        navLinks: [
          {
              link:"Back", 
              route:"/"
          },
      ]
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
              <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
              <h2>Login</h2>
              <LoginForm
                username={this.state.userType}
                clickHandler={this.changeType}
              />
            </Section>
        )
    }
}