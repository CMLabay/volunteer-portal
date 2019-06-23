import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'
import TokenService from '../../services/token-service'

export default class NavLink extends Component{

    handleLogoutClick = () => {
        console.log('this.props.LinkName', this.props.LinkName)
        if(this.props.linkName === 'Logout'){
            TokenService.clearAuthToken()
            console.log('clearing auth token')
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