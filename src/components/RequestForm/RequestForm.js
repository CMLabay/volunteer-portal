import React, { Component } from 'react'
import { Button, Input} from '../Utils/Utils'
import './RequestForm.css'

export default class RequestForm extends Component{

    render(){
        return(
            <form 
              className="requestForm" 
              onSubmit={this.props.onClick}
            >
                <div>
                    <label 
                      htmlFor='race-name'>
                          Race Name
                    </label>
                    <Input 
                      name="race-name" 
                      type="text"
                      id="ReqForm-name">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='race-distance'>
                      Race Distance
                    </label>
                    <Input 
                      name="race-distance" 
                      type="text" 
                      id="ReqForm-distance">
                    </Input>
                </div>
                <Button 
                  type="submit">
                    Submit Request
                </Button>
            </form>
        )
    }
}