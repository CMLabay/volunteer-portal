import React, { Component } from 'react'
import RacesApiService from '../../services/races-api-service'

export default class RaceDropDown extends Component{
        
    state = { 
        error: null,
        races: [{
          id:'',
          name:'',
        } ]
      }

    componentDidMount(){
        RacesApiService.getRaces()
          .then(res => {
            let races = res;
            this.setState( { races })
          })
          .catch(this.state.error)
      }

    render(){
        const raceList = this.state.races
        return (
            <select name="shiftRaceName"
                    id="shiftRaceName"
                    onChange={this.props.onChange}
                    >
                {raceList.map(race =>
                    <option key={race.id}
                            literal={race.name}
                            value={race.id}>
                            {race.name}
                    </option>
                )}
            </select>
        )
    }
}