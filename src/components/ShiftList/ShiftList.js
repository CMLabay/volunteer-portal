import React, { Component } from 'react'
import ShiftItem from '../../components/ShiftItem/ShiftItem'
import './ShiftList.css'

export default class ShiftList extends Component{
    state = {
        shiftItems: [
            {
                name:"Main Aid Station",
                raceName:"Habanero 100",
                date:"August 8",
                time: "5am - 2pm",
                day: "Saturday"
            },
            {
                name:"Packet Pickup",
                raceName:"Habanero 100",
                date:"August 8",
                time: "5am - 2pm",
                day: "Saturday"
            },
            {
                name:"Race Director Assistant",
                raceName:"Habanero 100",
                date:"August 8",
                time: "5am - 2pm",
                day: "Saturday"
            },
            {
                name:"Merch",
                raceName:"Habanero 100",
                date:"August 8",
                time: "5am - 2pm",
                day: "Saturday"
            },
            {
                name:"Medical",
                raceName:"Habanero 100",
                date:"August 8",
                time: "5am - 2pm",
                day: "Saturday"
            },
        ]
    }
    render(){
        return(
            <div>
                <ul className="available">
                    {Object.keys(this.state.shiftItems)
                        .map(key => {
                            return (
                                <ShiftItem
                                    key={key}
                                    id={key}
                                    className={this.props.className}
                                    shiftName={this.state.shiftItems[key].name}
                                    raceName={this.state.shiftItems[key].raceName}
                                    shiftDate={this.state.shiftItems[key].date}
                                    shiftDay={this.state.shiftItems[key].day}
                                    shiftTime={this.state.shiftItems[key].time}
                                    onClick={this.props.onClick}
                                />
                            )
                        })}
                </ul>
            </div>
        )
    }
}