import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import NavBar from '../../components/NavBar/NavBar'

export default class LoginPage extends Component{
    state = {
        username: ''
    }
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
      changeName = (name) => {
          console.log('name',name)
          let newName = name;
          this.setState({
              username: newName
          });
      }

  componentDidUpdate(){
    let destination = '/home'
    if(this.state.username === 'admin'){
        destination = '/admin'
    }
    const { history } = this.props
    history.push(destination)
  }

    render(){
        return(
          <Section className='LoginPage'>
              {/*add links in as props */}
            <NavBar></NavBar>
            <h2>Login</h2>
            <LoginForm
              username={this.state.username}
              clickHandler={this.changeName}
            />
          </Section>
        )
    }
}