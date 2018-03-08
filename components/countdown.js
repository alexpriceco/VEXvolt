import { Component } from 'react'

import Stylesheet from './stylesheet.js'
import sheet from './countdown.scss'

export default class Countdown extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0
    }
  }

  componentDidMount () {
    const target = new Date('March 15, 2018 8:00 CST')
    let seconds = (target - new Date()) / 1000

    let days = (seconds / 60 / 60 / 24) | 0
    // let hours = (seconds % (60 * 60 * 24)) / (60 * 60)
    // let minutes = seconds / 60

    console.debug(days)
    // this.setState({ days, hours, minutes })
  }

  render () {
    const {
      days,
      hours,
      minutes
    } = this.state

    return (
      <div>
        <div className='countdown'>
          <div className='days'>
            <h2>{days}</h2>
            <span>DAYS</span>
          </div>
          <div className='hours'>
            <h2>{hours}</h2>
            <span>HRS</span>
          </div>
          <div className='minutes'>
            <h2>{minutes}</h2>
            <span>MINS</span>
          </div>
        </div>

        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}
