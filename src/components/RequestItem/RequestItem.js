import React, {Component} from 'react'
import './RequestItem.css'

export default class RequestItem extends Component{
    render(){
        const emailLink = `mailto:${this.props.userEmail}`
        return(
            <li className="requestItem" key={this.props.key} id={this.props.id}>
                <p>{this.props.userEmail}</p>
                <p>{this.props.race} - {this.props.distance}</p>
                <a href={emailLink}>Email New Code</a>
                <button>Subtract Volunteer Point</button>
            </li>
        )
    }
}