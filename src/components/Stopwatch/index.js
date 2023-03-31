// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  startTimer = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
      minutes: prevState.minutes,
    }))
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {seconds} = this.state
    const total = seconds / 60
    const num = Math.floor(total)
    const minutesOf = num > 9 ? num : `0${num}`
    const totalSeconds = seconds % 60
    const secondsOf = totalSeconds > 9 ? totalSeconds : `0${totalSeconds}`
    return (
      <div className="cont">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="first">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timer">
            {minutesOf}:{secondsOf}
          </h1>
          <div className="button-cont">
            <button type="button" className="button1" onClick={this.startTimer}>
              Start
            </button>
            <button type="button" className="button2" onClick={this.stopTimer}>
              Stop
            </button>
            <button type="button" className="button3" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
