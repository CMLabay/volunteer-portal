import React, { Component } from 'react'
import { Button, Input} from '../Utils/Utils'
import RaceDropDown from '../RaceDropDown/RaceDropDown';
import './RequestForm.css'

export default class RequestForm extends Component{
  state = { 
    raceId:'',
  }
  onChange = (ev) => {
  }
    render(){
        return(
            <form 
              className="requestForm" 
              onSubmit={this.props.onClick}
            >
                <div>
                    <label 
                      htmlFor='shiftFormRaceName'>
                          Race Name
                    </label>
                    <RaceDropDown 
                      name="shiftRaceName"
                      onChange={this.onChange}>
                    </RaceDropDown>
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