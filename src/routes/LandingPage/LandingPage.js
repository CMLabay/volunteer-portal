import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component{
    render(){
        return(
            <div>
                <h3>Landing Page</h3>
                <Link
                    to='/register'>
                        Register
                    </Link>
            </div>
        )
    }
}