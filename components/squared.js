import { Component } from 'react'

export default class Squared extends Component {
  render () {
    return (
      <svg
        width='104' height='104'
        viewBox='0 0 104 104'
        className={'squared' + (this.props.flipped ? ' flipped' : '')}
      >
        <g fill='none'>
          <g>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(32 0)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(64 0)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(96 0)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(0 32)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(32 32)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(64 32)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(96 32)'>
            <rect width='8' height='8' fill='#FFB900' />
          </g>
          <g transform='translate(0 64)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(32 64)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(64 64)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(96 64)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(0 96)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(32 96)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(64 96)'>
            <rect width='8' height='8' fill='black' />
          </g>
          <g transform='translate(96 96)'>
            <rect width='8' height='8' fill='black' />
          </g>
        </g>
      </svg>
    )
  }
}
