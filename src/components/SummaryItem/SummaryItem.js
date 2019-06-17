import React, { Component } from 'react'
import './SummaryItem.css'

export default class SummaryItem extends Component{
    render(){
        return(
            <section className="summaryItem" id={this.props.id} key={this.props.key}>
                <h3>{this.props.title}</h3>
                <p>{this.props.image}</p>
                <p>{this.props.summary}</p>
            </section>
        )
    }
}