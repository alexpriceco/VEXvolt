import { Component } from 'react'

import Stylesheet from './stylesheet.js'
import sheet from './countdown.scss'

export default class Countdown extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      email: '',
      valid: false,
      submitted: false,
      modalOpen: false,
      minutes: 0,
      hours: 0,
      days: 0
    }
  }

  componentDidMount () {
    const { days, hours, minutes: mins } = this.state
    if (days === hours && hours === mins && mins === 0) this.updateCountdown()
  }

  updateCountdown () {
    const target = new Date('March 15, 2018 8:00 CST')
    let diff = (target - new Date()) / 1000

    let days = (diff / 60 / 60 / 24) | 0
    let hours = ((diff - (days * 60 * 60 * 24)) / 60 / 60) | 0
    let minutes = ((diff - (hours * 60 * 60) - (days * 60 * 60 * 24)) / 60) | 0

    this.setState({ days, hours, minutes }, () => {
      setTimeout(() => { this.updateCountdown() }, 15000)
    })
  }

  submit () {
    const email = '*' + this.state.email + '*'
    const data = JSON.stringify({
      text: email + ' wants to be emailed at launch!'
    })
    const req = new XMLHttpRequest() // eslint-disable-line
    const slackWebhook = 'https://hooks.slack.com/services/' +
      'T076KJELT/B9NSTDVDL/wdTBx63P3lag8w71lyvJZ6b5'
    req.open('POST', slackWebhook, true)
    req.send(data)
    this.setState({ submitted: true })
  }

  render () {
    const {
      days,
      hours,
      minutes,
      modalOpen,
      submitted,
      email
    } = this.state

    console.info(this.state)

    return (
      <div>
        <span className='before'>CAMPAIGN BEGINS IN</span>
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

        <div className='button' onClick={() => {
          this.setState({ modalOpen: true })
        }}>
          Keep me informed
        </div>

        <div
          ref={(ref) => { this.modalRef = ref }}
          className={'modal--wrapper ' + (modalOpen ? ' open' : '')}
          onClick={(e) => {
            if (e.target === this.modalRef) this.setState({ modalOpen: false })
          }}
        >
          <div className={'modal' + (submitted ? ' submitted' : '')}>
            <h2>Stay in the know.</h2><p>You'll get an email <em>(and only one!)</em> from me when we're set to launch the campaign.</p>

            <div className={'input-wrapper' + (this.state.valid ? ' valid' : '') + (submitted ? ' success' : '')}>
              <span className='success'>Done! I'll email you soon!</span>
              <span className={'placeholder' + (email !== '' ? ' hidden' : '')}>your.email@gmail.com</span>
              <input
                defaultValue={email || ''}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' && this.state.valid) this.submit()
                }}
                onChange={(e) => {
                  this.setState({
                    email: e.target.value || '',
                    valid: (/\S+@\S+\.\S+/).test(e.target.value || '')
                  })
                }}
              />
              <div
                className='continue-button'
                onClick={() => this.submit()}>&rarr;</div>
            </div>
          </div>
        </div>

        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}
