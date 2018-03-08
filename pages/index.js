import React, { Component } from 'react'

import Squared from '../components/squared.js'

import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: '',

      // Data from Firebase
      data: {}
    }
  }

  componentDidMount () {
    console.debug('Loaded')
    this.setState({ loading: false })
  }

  render () {
    return (
      <main>
        <header>
          <article>
            <h1>Stop digging through piles of batteries</h1>
            <p>VEXvolt delivers fast, accurate battery voltage, so you can focus on robots, not batteries.</p>
          </article>
        </header>

        <section>
          <article>
            <div>
              <h1>Designed for you</h1>
              <p>VEXvolt was originally designed in a high school, then constantly improved with user feedback.</p>
            </div>
          </article>
          <Squared />
        </section>

        <section>
          <article>
            <div>
              <h1>Competition ready</h1>
              <p>3d printed in black photopolymer resin, and assembled by hand, VEXvolt is built for durability.</p>
            </div>
          </article>

          <div className='video-container'>
            <video loop autoPlay playsInline
              src='https://builtvisible.com/wp-content/uploads/2016/05/demo1-mp4.mp4'
            />
          </div>

          <Squared flipped />
        </section>

        <section>
          <article>
            <div>
              <h1>Performance first</h1>
              <p>VEXvolt is fast, and easy to use. Less complication means less time spent getting a reading.</p>
            </div>
          </article>
          <Squared />
        </section>

        <section className='centered'>
          <article>
            campaign countdown
            back button
            questions?
          </article>
          <Squared flipped />
        </section>

        <footer>
          footer stuff here
        </footer>
        <Stylesheet sheet={sheet} />
      </main>
    )
  }
}

export default Index
