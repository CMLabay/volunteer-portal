import React, { Component } from 'react'
import './ShiftItem.css'
import { withRouter } from 'react-router-dom'
import ShiftApiService from '../../services/shifts-api-service';
import UserContext from '../../contexts/user-context'
import AuthApiService from '../../services/auth-api-service';

class ShiftItem extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
    handleClick = () => {
        //add userid to the shift
        ShiftApiService.updateShift(this.context.userId, this.props.shiftId)
        .then(res => {
            this.context.setUpdateFlag(true)
        })
        //add a credit to the user
        let credits = this.context.credits + 1
        AuthApiService.updateUser(this.context.userId, credits)
        this.context.updateCredits(this.context.credits + 1)
        const {history} = this.props
        history.push('/home')       
    }

    static contextType = UserContext;
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
                    onClick={this.handleClick}>
                    Take This Shift
                </button>
            </li>
        )
    }
}

export default withRouter(ShiftItem)