import React, { Component } from 'react'
import './NavLink.css'

export default class NavLink extends Component{
    render(){
        return(
            <li className={this.props.className}>
                <a href={this.props.routeName} >{this.props.linkName}</a>
            </li>
        )
    }
}