import React, { Component } from 'react'
import Style from '../components/general/style'
import sheet from '../components/base.scss'

import dynamic from 'next/dynamic'
dynamic(import('aframe'), { ssr: false })

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
    }
  }

  render () {
    return (
      <main>
        <header>
          <h1>VEXvolt website</h1>
          <Style sheet={sheet} />
        </header>
      </main>
    )
  }
}

export default Layout
