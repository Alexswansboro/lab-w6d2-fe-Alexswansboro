import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
  }
  equals () {
    let display = this.state.display
    let result = eval(this.state.display)
    this.setState({ history: this.state.history.concat(`${display} = ${result}`), display: result })
  }
  render () {
    return (
      <div>
        <h1 className='Calculator' />
        <div id='display'>{this.state.display}</div>
        {/* <div className='button'> */}
        <button id='1' onClick={() => this.setState({ display: this.state.display + '1' })}>1</button>
        <button id='2' onClick={() => this.setState({ display: this.state.display + '2' })}>2</button>
        <button id='3' onClick={() => this.setState({ display: this.state.display + '3' })}>3</button>
        <button id='4' onClick={() => this.setState({ display: this.state.display + '4' })}>4</button>
        <button id='5' onClick={() => this.setState({ display: this.state.display + '5' })}>5</button>
        <button id='6' onClick={() => this.setState({ display: this.state.display + '6' })}>6</button>
        <button id='7' onClick={() => this.setState({ display: this.state.display + '7' })}>7</button>
        <button id='8' onClick={() => this.setState({ display: this.state.display + '8' })}>8</button>
        <button id='9' onClick={() => this.setState({ display: this.state.display + '9' })}>9</button>
        <button id='0' onClick={() => this.setState({ display: this.state.display + '0' })}>0</button>
        <button id='+' onClick={() => this.setState({ display: this.state.display + '+' })}>+</button>
        <button id='-' onClick={() => this.setState({ display: this.state.display + '-' })}>-</button>
        <button id='x' onClick={() => this.setState({ display: this.state.display + 'x' })}>x</button>
        <button id='/' onClick={() => this.setState({ display: this.state.display + '/' })}>/</button>
        <button id='.' onClick={() => this.setState({ display: this.state.display + '.' })}>.</button>
        <button id='C' onClick={() => this.setState({ display: ' ' })}>C</button>
        <button id='=' onClick={() => this.equals()}>=</button>
        {/* </div> */}
        <div id='history'>{this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}</div>
        <p className='App-intro' />
      </div>

    )
  }
}

export default App
