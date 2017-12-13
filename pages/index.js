import React from 'react'
import dynamic from 'next/dynamic'

import Style from '../components/general/style'
import sheet from '../components/base.scss'

const Layout = dynamic({
  modules: props => {
    const components = {
      aframe: import('aframe'),
      aframeReact: import('aframe-react')
    }

    return components
  },
  render: (props, { aframe, aframeReact }) => {
    const { Entity, Scene } = aframeReact

    return (
      <main>
        <Scene>
          <Entity geometry={{ primitive: 'box' }} material={{ color: 'red' }} position={{ x: 0, y: 0, z: -5 }} />
          <Entity light={{ type: 'point' }} />
          {/* <Entity gltf-model={{ src: 'virtualcity.gltf' }} /> */}
          <Entity text={{ value: 'Hello, WebVR!' }} />
        </Scene>
        <Style sheet={sheet} />
      </main>
    )
  },
  ssr: false
})

export default () => <Layout />
