import React, { Component } from 'react'
import SummaryItem from '../../components/SummaryItem/SummaryItem' 

export default class SummaryList extends Component{
    state = { 
        sectionInfo: [
            {
                title: "Manage your volunteer credits",
                summary: "Volunteer Portal helps you view and manage your volunteer points, so you always know how many race credits you have."
            },
            {
                title: "Sign up for volunteer shifts",
                summary: "Quickly and easily sign select a shift to volunteer for."
            },
        ]
    }
    render(){
        return(    
            <section>
             {Object.keys(this.state.sectionInfo)
                .map(key => {
                    return (
                        <SummaryItem 
                            key={key}
                            id={key}
                            title={this.state.sectionInfo[key].title}
                            image={this.state.sectionInfo[key].image}
                            summary={this.state.sectionInfo[key].summary} 
                        />
                    )
                })}
            </section>
        )
    }

}