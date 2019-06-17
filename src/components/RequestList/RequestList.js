import React, { Component } from 'react'
import RequestItem from '../../components/RequestItem/RequestItem'
import './RequestList.css'

export default class RequestList extends Component{
    state = {
        RequestItems: [
            {
                email:"email@web.com",
                race: "Brazos Bend 100",
                distance: "50 Miler"
            },
            {
                email:"email2@web.com",
                race: "Habanero 100",
                distance: "100k"
            },
            {
                email:"email3@web.com",
                race: "Running The Rose",
                distance: "11 Miler"
            },
            {
                email:"email4@web.com",
                race: "Wildflower",
                distance: "26.2"
            },
        ]
    }
    render(){
        return(
            <ul className="requestList">
                {Object.keys(this.state.RequestItems)
                    .map( key => {
                        return(
                            <RequestItem
                                key={key}
                                id={key}
                                userEmail={this.state.RequestItems[key].email}
                                race={this.state.RequestItems[key].race}
                                distance={this.state.RequestItems[key].distance}
                            />
                        )
                    })}
            </ul>
        )
    }
}