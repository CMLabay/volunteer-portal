import React, { Component } from 'react'
import { Button, Input} from '../Utils/Utils'
import './RequestForm.css'

export default class RequestForm extends Component{
    static defaultProps = {
        onLoginSuccess: () => {}
      }
    
    state = { error: null }

    handleSubmit = ev =>{
        ev.preventDefault()
        this.setState({ error: null })
        console.log('submitted request')
    }
    render(){
        return(
            <form 
              className="requestForm" 
              onSubmit={this.handleSubmit}
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