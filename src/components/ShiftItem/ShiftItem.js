import React, { Component } from 'react'
import './ShiftItem.css'

export default class ShiftItem extends Component{

    render(){
        return(
            <li className="avail-item">
                <h3>{this.props.shiftName}</h3>
                <p>{this.props.raceName}</p>
                <p className="avail-shift-date">{this.props.shiftDate}</p>
                <p className="avail-shift-day">{this.props.shiftDay}</p>
                <p className="avail-shift-time">{this.props.shiftTime}</p>
                <button 
                    className={this.props.className}
                    onClick={this.props.onClick}>
                    Take This Shift
                </button>
            </li>
        )
    }
}