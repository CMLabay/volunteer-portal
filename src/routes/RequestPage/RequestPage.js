import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import RequestForm from '../../components/RequestForm/RequestForm'
import './RequestPage.css'

export default class RequestPage extends Component{

    render(){
        return(
            <div>
                {/*add links in as props */}
                <NavBar></NavBar>
                <h3>Request a race credit</h3>
                <RequestForm></RequestForm>
            </div>
        )
    }
}