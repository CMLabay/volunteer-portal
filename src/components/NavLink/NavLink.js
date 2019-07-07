import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'
import TokenService from '../../services/token-service'

export default class NavLink extends Component{

    handleLogoutClick = () => {
        if(this.props.linkName === 'Logout'){
            TokenService.clearAuthToken()
            window.sessionStorage.removeItem('UserID')
            window.sessionStorage.removeItem('UserName')
            window.sessionStorage.removeItem('UserCredits')
        } 
    }
    render(){
        return(
            <li className={this.props.className}>
                <Link
                    onClick={this.handleLogoutClick}
                    to={this.props.routeName}>
                    {this.props.linkName}
                </Link>
            </li>
        )
    }
}