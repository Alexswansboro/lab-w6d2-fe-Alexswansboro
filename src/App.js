import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
    // this.buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    // this.operators = ['+', '-', '/', 'x']
  }
  equals () {
    let display = this.state.display
    let result = eval(this.state.display)
    this.state.history.push(`${display} = ${result}`)
    return result
  }
  render () {
    return (
      <div>
        <h1 className='Calculator' />
        <td>
          <div id='display'>{this.state.display}</div>
        </td>
        <tr id='history'>{this.state.history}</tr>
        <tr className='button'>
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
          <button id='=' onClick={() => equals()}>=</button>
        </tr>
        <p className='App-intro' />
      </div>

    )
  }
}
// function equals () {
//   let display = this.state.display
//   let result = eval(this.state.display)
//   this.state.history.push(`${display} = ${result}`)
//   return result
// }

export default App
