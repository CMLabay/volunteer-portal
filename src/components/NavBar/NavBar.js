import React, { Component } from 'react'
import './NavBar.css'

export default class UserHomePage extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
      render(){
        console.log('props', this.props.navLinks)
          return(
              <div>
                <nav className='app-nav'>
                    <ul  className="nav-list">
                        <li className="nav-item">Register</li>
                        <li className="nav-item">Login</li>
                    </ul>
                </nav>
              </div>
          )
      }
    }