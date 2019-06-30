import React, { Component } from 'react'
import ShiftItem from '../../components/ShiftItem/ShiftItem'
import ShiftsApiService from '../../services/shifts-api-service'
import './ShiftList.css'
import UserContext from '../../contexts/user-context'

export default class ShiftList extends Component{
    state = {
        userId: '',
        raceId:null,
        error: null,
        shiftItems: [
            {
                id: null,
                name: "",
                race_id: null,
                date: "",
                day: "",
                time:""
            },
        ]
    }

    static contextType = UserContext;

    getShifts = () =>{
        //api call to get available/taken shifts
        let userId = ''
        let raceId = ''
        if(this.props.userId){
            userId = this.props.userId
        } 
        if(this.props.raceId){
            raceId = this.props.raceId
        }
        ShiftsApiService.getShifts(raceId, userId)
            .then(res => {
                let shiftItems = res;
                this.setState( { shiftItems })
            })
            .catch(this.state.error)
    }
    componentDidMount(){
        this.getShifts()
        let raceId = this.props.raceId
        this.setState({ raceId })
    }
    componentDidUpdate(){
        if(this.props.raceId !== this.state.raceId || this.context.updateFlag === true){
            this.getShifts()
            this.setState({raceId:this.props.raceId })
            this.context.setUpdateFlag(false)
        }
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
                                    shiftId={this.state.shiftItems[key].id}
                                    raceId={this.props.raceId}
                                    onClick={this.props.onClick}
                                />
                            )
                        })}
                </ul>
            </div>
        )
    }
}