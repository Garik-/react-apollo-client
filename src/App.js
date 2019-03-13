import React, { Component } from 'react'
import Router from 'Router'

class App extends Component {
  componentDidMount () {
    // initNotifications()
  }
  render () {
    return (
      <Router {...this.props} />
    )
  }
}

export default App
