import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

export default class LandingPage extends Component{
    state = { navLinks: ['Home', 'Logout'] }
    render(){
        return(
            <div>
                {/*add links in as props */}
                <NavBar navLinks={this.navLinks}></NavBar>
                <h3>Landing Page</h3>
                <Link
                    to='/register'>
                        Register
                    </Link>
            </div>
        )
    }
}