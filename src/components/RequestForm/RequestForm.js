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
                    <select name="races">
                      <option value="habanero">Habanero 100</option>
                      <option value="brazos">Brazos Bend 100</option>
                      <option value="mission">Mission Tejas</option>
                      <option value="possum">Possum's Revenge</option>
                    </select>
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