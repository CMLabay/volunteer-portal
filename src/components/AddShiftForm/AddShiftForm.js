import React, { Component } from 'react'
import { Button, Input} from '../Utils/Utils'
import ShiftsApiService from '../../services/shifts-api-service'
import { withRouter } from 'react-router-dom'
import RaceDropDown from '../RaceDropDown/RaceDropDown';

class AddShiftForm extends Component{
    static defaultProps = {
        history: {
            push: () => {},
          },
        onLoginSuccess: () => {}
      }
    
    state = { 
        error: null,
      }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { shiftName, shiftDay, shiftDate, shiftTime, shiftRaceName } = ev.target
        //make api post
        ShiftsApiService.postShift(shiftName.value, shiftDay.value, shiftDate.value, shiftTime.value, shiftRaceName.value)
          .catch(this.state.error)
        const { history } = this.props
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
                      htmlFor='shiftRaceName'>
                          Race Name
                    </label>
                    <RaceDropDown id="dropdown" name="shiftRaceName"></RaceDropDown>                   
                </div>
                <div>
                    <label 
                      htmlFor='shiftName'>
                      Shift Name
                    </label>
                    <Input 
                      className="form-input"
                      name="shiftName" 
                      type="text" 
                      id="shiftFormName">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shiftDate'>
                      Shift Date
                    </label>
                    <Input 
                      className="form-input"
                      name="shiftDate"
                      id="shiftFormDate">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shiftDay'>
                      Shift Day
                    </label>
                    <Input 
                      className="form-input"
                      name="shiftDay" 
                      type="text" 
                      id="shiftFormDay">
                    </Input>
                </div>
                <div>
                    <label 
                      htmlFor='shiftTime'>
                      Shift Time
                    </label>
                    <Input 
                      className="form-input"
                      name="shiftTime" 
                      type="text" 
                      id="shiftFormTime">
                    </Input>
                </div>
                <Button 
                  type="submit">
                    Add Shift
                </Button>
            </form>
        )
    }
}
export default withRouter(AddShiftForm)