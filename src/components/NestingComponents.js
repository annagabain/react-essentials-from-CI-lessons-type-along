import React, { Component } from 'react'
import UserData from './UserData'
import UserMessage from './UserMessage'

export class NestingComponents extends Component {
  constructor(props) {
    super(props)

    this.state = {
        isLoaded: false,
        isLoggedIn: true
    }
  }

  render() {
    return (
      <div>NestingComponents
        <UserData isLoaded={this.state.isLoaded}/>
        <UserMessage isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default NestingComponents