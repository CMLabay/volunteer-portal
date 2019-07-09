import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target
    this.setState({ error: null })
    AuthApiService.postUser({
      email: user_name.value,
      password: password.value,
      full_name: full_name.value,
      type: 'user',
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render(){
      const { error } = this.state
      return(
          <form
            className='RegistrationForm'
            onSubmit={this.handleSubmit}
          >
         <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            className="form-input"
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            Email <Required />
          </label>
          <Input
            className="form-input"
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            className="form-input"
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
          <p className="pass-req">Password must be at least 8 characters and include at least one of each: 
          <br/>uppercase letter, lowercase letter, number, and special character. </p>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
      )
    }
  }