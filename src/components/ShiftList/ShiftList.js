import React, { Component } from 'react'
import ShiftItem from '../../components/ShiftItem/ShiftItem'
import './ShiftList.css'

export default class ShiftList extends Component{
    render(){
        return(
            <div>
                <ul className="available">
                    {/* add static data and map each item */}
                    <ShiftItem
                        onClick={this.props.onClick}
                        className="shift-item"
                        shiftName="shift 1"
                        shiftDate="August 8"
                        shiftTime="5am - 2pm"
                        shiftDay="Saturday">
                    </ShiftItem>
                    <ShiftItem
                        onClick={this.props.onClick}
                        className="shift-item"
                        shiftName="shift 2"
                        shiftDate="August 8"
                        shiftTime="5am - 2pm"
                        shiftDay="Saturday">
                    </ShiftItem>
                    <ShiftItem
                        onClick={this.props.onClick}
                        className="shift-item"
                        shiftName="shift 3"
                        shiftDate="August 8"
                        shiftTime="5am - 2pm"
                        shiftDay="Saturday">
                    </ShiftItem>
                    <ShiftItem
                        onClick={this.props.onClick}
                        className="shift-item"
                        shiftName="shift 4"
                        shiftDate="August 8"
                        shiftTime="5am - 2pm"
                        shiftDay="Saturday">
                    </ShiftItem>
                    <ShiftItem
                        onClick={this.props.onClick}
                        className="shift-item"
                        shiftName="shift 5"
                        shiftDate="August 8"
                        shiftTime="5am - 2pm"
                        shiftDay="Saturday">
                    </ShiftItem>
                </ul>
            </div>
        )
    }
}