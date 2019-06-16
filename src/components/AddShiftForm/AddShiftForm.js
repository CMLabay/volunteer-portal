import React, { Component } from 'react'
import { Button, Input} from '../Utils/Utils'


export default class AddShiftForm extends Component{
    static defaultProps = {
        history: {
            push: () => {},
          },
        onLoginSuccess: () => {}
      }
    
    state = { error: null }

    handleSubmit = ev =>{
        ev.preventDefault()
        this.setState({ error: null })
        console.log('added shift')
        const {history} = this.props
        history.push('/admin')
    }
    render(){
        return(
            <form 
              className="requestForm" 
              onSubmit={this.handleSubmit}
            >
                <div>
                    <label 
                      htmlFor='shift-race-name'>
                          Race Name
                    </label>
                    <Input 
                      name="shift-race-name" 
                      type="text"
                      id="shiftForm-race-name">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shift-name'>
                      Shift Name
                    </label>
                    <Input 
                      name="shift-name" 
                      type="text" 
                      id="shiftForm-name">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shift-date'>
                      Shift Date
                    </label>
                    <Input 
                      name="shift-date" 
                      type="text" 
                      id="shiftForm-date">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shift-time'>
                      Shift Time
                    </label>
                    <Input 
                      name="shift-time" 
                      type="text" 
                      id="shiftForm-time">
                    </Input>
                </div>
                <Button 
                  onClick={this.props.addShift}>
                    Add Shift
                </Button>
            </form>
        )
    }
}