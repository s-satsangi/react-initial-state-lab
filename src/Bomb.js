// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        let renderText = (this.state.secondsLeft !== 0) ?  `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!' 
        return (
            <div>
                {renderText}
            </div>
        )
    }
}


