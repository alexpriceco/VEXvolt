import React, { Component } from 'react'

import Squared from '../components/squared.js'

import Stylesheet from '../components/stylesheet.js'
import sheet from '../components/base.scss'

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: ''
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

          <div>
            {/* Cover */}
            <svg width='112' height='182' viewBox='0 0 112 182'>
              <g id='path0'>
                <path transform='translate(1 1)' fill='black' fillOpacity='0.05' fillRule='evenodd' clipRule='evenodd' d='M 94 136C 94 112 110 104 110 80L 102 80L 8 80L 0 80C 0 104 16 112 16 136L 16 174C 16 177.314 18.6863 180 22 180L 48 180L 88 180C 91.3137 180 94 177.314 94 174L 94 136ZM 88 128L 61 128L 69 91L 82.5 91L 101.129 87C 97.7914 101.501 88 117.698 88 128ZM 22.1292 128L 49.1292 128L 41.1292 91L 27.6292 91L 9 87C 12.3378 101.501 22.1292 117.698 22.1292 128Z' />
                <path transform='translate(1 1)' fill='black' fillOpacity='0.05' d='M 110 6C 110 2.68629 107.314 0 104 0L 6 0C 2.68629 0 0 2.68629 0 6L 0 80L 8 80L 102 80L 110 80L 110 6ZM 8 66L 32 66L 56 66L 80 66L 102 66L 102 46L 104 46L 104 26L 102 26L 102 10L 8 10L 8 26L 6 26L 6 46L 8 46L 8 66Z' />
              </g>

              <path transform='translate(1 1)' fill='black' id='path1' d='M 88 128L 88 128.75L 88.75 128.75L 88.75 128L 88 128ZM 61 128L 60.2669 127.841L 60.0705 128.75L 61 128.75L 61 128ZM 8 66L 7.25 66L 7.25 66.75L 8 66.75L 8 66ZM 8 46L 8.75 46L 8.75 45.25L 8 45.25L 8 46ZM 6 46L 5.25 46L 5.25 46.75L 6 46.75L 6 46ZM 6 26L 6 25.25L 5.25 25.25L 5.25 26L 6 26ZM 8 26L 8 26.75L 8.75 26.75L 8.75 26L 8 26ZM 8 10L 8 9.25L 7.25 9.25L 7.25 10L 8 10ZM 102 10L 102.75 10L 102.75 9.25L 102 9.25L 102 10ZM 102 26L 101.25 26L 101.25 26.75L 102 26.75L 102 26ZM 104 26L 104.75 26L 104.75 25.25L 104 25.25L 104 26ZM 104 46L 104 46.75L 104.75 46.75L 104.75 46L 104 46ZM 102 46L 102 45.25L 101.25 45.25L 101.25 46L 102 46ZM 102 66L 102 66.75L 102.75 66.75L 102.75 66L 102 66ZM 69 91L 69 90.25L 68.3948 90.25L 68.2669 90.8415L 69 91ZM 82.5 91L 82.5 91.75L 82.5796 91.75L 82.6574 91.7333L 82.5 91ZM 101.129 87L 101.86 87.1682L 102.125 86.0192L 100.972 86.2667L 101.129 87ZM 22.1292 128L 21.3792 128L 21.3792 128.75L 22.1292 128.75L 22.1292 128ZM 49.1292 128L 49.1292 128.75L 50.0587 128.75L 49.8623 127.841L 49.1292 128ZM 41.1292 91L 41.8623 90.8415L 41.7344 90.25L 41.1292 90.25L 41.1292 91ZM 27.6292 91L 27.4717 91.7333L 27.5496 91.75L 27.6292 91.75L 27.6292 91ZM 9 87L 9.15745 86.2667L 8.00463 86.0192L 8.26911 87.1682L 9 87ZM 6 0.75L 104 0.75L 104 -0.75L 6 -0.75L 6 0.75ZM 109.25 6L 109.25 80L 110.75 80L 110.75 6L 109.25 6ZM 109.25 80C 109.25 91.8089 105.326 99.6705 101.329 107.665C 97.3262 115.67 93.25 123.809 93.25 136L 94.75 136C 94.75 124.191 98.6738 116.33 102.671 108.335C 106.674 100.33 110.75 92.1911 110.75 80L 109.25 80ZM 93.25 136L 93.25 174L 94.75 174L 94.75 136L 93.25 136ZM 88 179.25L 48 179.25L 48 180.75L 88 180.75L 88 179.25ZM -0.75 6L -0.75 80L 0.75 80L 0.75 6L -0.75 6ZM -0.75 80C -0.75 92.1911 3.32624 100.33 7.32918 108.335C 11.3262 116.33 15.25 124.191 15.25 136L 16.75 136C 16.75 123.809 12.6738 115.67 8.67082 107.665C 4.67376 99.6705 0.75 91.8089 0.75 80L -0.75 80ZM 15.25 136L 15.25 174L 16.75 174L 16.75 136L 15.25 136ZM 22 180.75L 48 180.75L 48 179.25L 22 179.25L 22 180.75ZM 8 79.25L 0 79.25L 0 80.75L 8 80.75L 8 79.25ZM 102 80.75L 110 80.75L 110 79.25L 102 79.25L 102 80.75ZM 61 128.75L 88 128.75L 88 127.25L 61 127.25L 61 128.75ZM 32 65.25L 8 65.25L 8 66.75L 32 66.75L 32 65.25ZM 8.75 66L 8.75 46L 7.25 46L 7.25 66L 8.75 66ZM 8 45.25L 6 45.25L 6 46.75L 8 46.75L 8 45.25ZM 6.75 46L 6.75 26L 5.25 26L 5.25 46L 6.75 46ZM 6 26.75L 8 26.75L 8 25.25L 6 25.25L 6 26.75ZM 8.75 26L 8.75 10L 7.25 10L 7.25 26L 8.75 26ZM 8 10.75L 102 10.75L 102 9.25L 8 9.25L 8 10.75ZM 101.25 10L 101.25 26L 102.75 26L 102.75 10L 101.25 10ZM 102 26.75L 104 26.75L 104 25.25L 102 25.25L 102 26.75ZM 103.25 26L 103.25 46L 104.75 46L 104.75 26L 103.25 26ZM 104 45.25L 102 45.25L 102 46.75L 104 46.75L 104 45.25ZM 101.25 46L 101.25 66L 102.75 66L 102.75 46L 101.25 46ZM 102 65.25L 80 65.25L 80 66.75L 102 66.75L 102 65.25ZM 56 66.75L 80 66.75L 80 65.25L 56 65.25L 56 66.75ZM 32 66.75L 56 66.75L 56 65.25L 32 65.25L 32 66.75ZM 8 80.75L 102 80.75L 102 79.25L 8 79.25L 8 80.75ZM 61.7331 128.158L 69.7331 91.1585L 68.2669 90.8415L 60.2669 127.841L 61.7331 128.158ZM 69 91.75L 82.5 91.75L 82.5 90.25L 69 90.25L 69 91.75ZM 100.398 86.8318C 98.746 94.0104 95.4942 101.615 92.6168 108.796C 89.7663 115.909 87.25 122.676 87.25 128L 88.75 128C 88.75 123.022 91.1295 116.54 94.0091 109.354C 96.8618 102.235 100.175 94.4908 101.86 87.1682L 100.398 86.8318ZM 82.6574 91.7333L 101.287 87.7333L 100.972 86.2667L 82.3426 90.2667L 82.6574 91.7333ZM 49.1292 127.25L 22.1292 127.25L 22.1292 128.75L 49.1292 128.75L 49.1292 127.25ZM 49.8623 127.841L 41.8623 90.8415L 40.3961 91.1585L 48.3961 128.158L 49.8623 127.841ZM 41.1292 90.25L 27.6292 90.25L 27.6292 91.75L 41.1292 91.75L 41.1292 90.25ZM 8.26911 87.1682C 9.95457 94.4908 13.2674 102.235 16.1201 109.354C 18.9997 116.54 21.3792 123.022 21.3792 128L 22.8792 128C 22.8792 122.676 20.3629 115.909 17.5124 108.796C 14.635 101.615 11.3832 94.0104 9.73089 86.8318L 8.26911 87.1682ZM 27.7866 90.2667L 9.15745 86.2667L 8.84255 87.7333L 27.4717 91.7333L 27.7866 90.2667ZM 15.25 174C 15.25 177.728 18.2721 180.75 22 180.75L 22 179.25C 19.1005 179.25 16.75 176.899 16.75 174L 15.25 174ZM 93.25 174C 93.25 176.899 90.8995 179.25 88 179.25L 88 180.75C 91.7279 180.75 94.75 177.728 94.75 174L 93.25 174ZM 104 0.75C 106.899 0.75 109.25 3.10051 109.25 6L 110.75 6C 110.75 2.27208 107.728 -0.75 104 -0.75L 104 0.75ZM 6 -0.75C 2.27208 -0.75 -0.75 2.27208 -0.75 6L 0.75 6C 0.75 3.10051 3.10051 0.75 6 0.75L 6 -0.75Z' />
              <g id='path2'>
                <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 49.1292 128L 22.1292 128C 22.1292 117.698 12.3378 101.501 9 87L 27.6292 91L 41.1292 91L 49.1292 128Z' />
                <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 61 128L 88 128C 88 117.698 97.7914 101.501 101.129 87L 82.5 91L 69 91L 61 128Z' />
              </g>
            </svg>
          </div>

          <svg width='112' height='182' viewBox='0 0 112 182'>
            <g>
              <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 80 128L 80 68L 56 68L 56 128L 80 128Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 56 128L 56 68L 32 68L 32 128L 56 128Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 56 68L 80 68L 102 68L 102 46L 104 46L 104 26L 102 26L 102 8L 8 8L 8 26L 6 26L 6 46L 8 46L 8 68L 32 68L 56 68Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.2' d='M 58 140L 54 140L 52.1 178L 59.9 178L 58 140Z' />
            </g>

            <path transform='translate(1 1)' fill='black' d='M 48 140L 48 139.25L 47.25 139.25L 47.25 140L 48 140ZM 64 140L 64.75 140L 64.75 139.25L 64 139.25L 64 140ZM 24 128L 23.25 128L 23.25 128.75L 24 128.75L 24 128ZM 86 128L 86 128.75L 86.75 128.75L 86.75 128L 86 128ZM 102 80L 102 79.25L 101.25 79.25L 101.25 80L 102 80ZM 8 80L 8.75 80L 8.75 79.25L 8 79.25L 8 80ZM 8 68L 7.25 68L 7.25 68.75L 8 68.75L 8 68ZM 8 46L 8.75 46L 8.75 45.25L 8 45.25L 8 46ZM 6 46L 5.25 46L 5.25 46.75L 6 46.75L 6 46ZM 6 26L 6 25.25L 5.25 25.25L 5.25 26L 6 26ZM 8 26L 8 26.75L 8.75 26.75L 8.75 26L 8 26ZM 8 8L 8 7.25L 7.25 7.25L 7.25 8L 8 8ZM 102 8L 102.75 8L 102.75 7.25L 102 7.25L 102 8ZM 102 26L 101.25 26L 101.25 26.75L 102 26.75L 102 26ZM 104 26L 104.75 26L 104.75 25.25L 104 25.25L 104 26ZM 104 46L 104 46.75L 104.75 46.75L 104.75 46L 104 46ZM 102 46L 102 45.25L 101.25 45.25L 101.25 46L 102 46ZM 102 68L 102 68.75L 102.75 68.75L 102.75 68L 102 68ZM 60 180L 59.2509 180.037L 59.2866 180.75L 60 180.75L 60 180ZM 52 180L 52 180.75L 52.7134 180.75L 52.7491 180.037L 52 180ZM 59.9 178L 60.6491 177.963L 60.6491 177.963L 59.9 178ZM 52.1 178L 51.3509 177.963L 51.3509 177.963L 52.1 178ZM 6 0.75L 104 0.75L 104 -0.75L 6 -0.75L 6 0.75ZM 109.25 6L 109.25 80L 110.75 80L 110.75 6L 109.25 6ZM 109.25 80C 109.25 91.8089 105.326 99.6705 101.329 107.665C 97.3262 115.67 93.25 123.809 93.25 136L 94.75 136C 94.75 124.191 98.6738 116.33 102.671 108.335C 106.674 100.33 110.75 92.1911 110.75 80L 109.25 80ZM 93.25 136L 93.25 174L 94.75 174L 94.75 136L 93.25 136ZM 88 179.25L 64 179.25L 64 180.75L 88 180.75L 88 179.25ZM -0.75 6L -0.75 80L 0.75 80L 0.75 6L -0.75 6ZM -0.75 80C -0.75 92.1911 3.32624 100.33 7.32918 108.335C 11.3262 116.33 15.25 124.191 15.25 136L 16.75 136C 16.75 123.809 12.6738 115.67 8.67082 107.665C 4.67376 99.6705 0.75 91.8089 0.75 80L -0.75 80ZM 15.25 136L 15.25 174L 16.75 174L 16.75 136L 15.25 136ZM 22 180.75L 48 180.75L 48 179.25L 22 179.25L 22 180.75ZM 48.75 180L 48.75 140L 47.25 140L 47.25 180L 48.75 180ZM 63.25 140L 63.25 180L 64.75 180L 64.75 140L 63.25 140ZM 101.25 80C 101.25 87.8024 97.3372 96.647 93.3214 105.181C 91.3282 109.416 89.3135 113.571 87.8021 117.413C 86.2939 121.246 85.25 124.854 85.25 128L 86.75 128C 86.75 125.146 87.7061 121.754 89.1979 117.962C 90.6865 114.179 92.6718 110.084 94.6786 105.819C 98.6628 97.353 102.75 88.1976 102.75 80L 101.25 80ZM 7.25 80C 7.25 88.1976 11.3372 97.353 15.3214 105.819C 17.3282 110.084 19.3135 114.179 20.8021 117.962C 22.2939 121.754 23.25 125.146 23.25 128L 24.75 128C 24.75 124.854 23.7061 121.246 22.1979 117.413C 20.6865 113.571 18.6718 109.416 16.6786 105.181C 12.6628 96.647 8.75 87.8024 8.75 80L 7.25 80ZM 8 79.25L 0 79.25L 0 80.75L 8 80.75L 8 79.25ZM 102 80.75L 110 80.75L 110 79.25L 102 79.25L 102 80.75ZM 80 128.75L 86 128.75L 86 127.25L 80 127.25L 80 128.75ZM 80.75 128L 80.75 68L 79.25 68L 79.25 128L 80.75 128ZM 80 67.25L 56 67.25L 56 68.75L 80 68.75L 80 67.25ZM 56 128.75L 80 128.75L 80 127.25L 56 127.25L 56 128.75ZM 55.25 68L 55.25 128L 56.75 128L 56.75 68L 55.25 68ZM 24 128.75L 32 128.75L 32 127.25L 24 127.25L 24 128.75ZM 32 128.75L 56 128.75L 56 127.25L 32 127.25L 32 128.75ZM 32.75 128L 32.75 68L 31.25 68L 31.25 128L 32.75 128ZM 32 68.75L 56 68.75L 56 67.25L 32 67.25L 32 68.75ZM 32 67.25L 8 67.25L 8 68.75L 32 68.75L 32 67.25ZM 8.75 68L 8.75 46L 7.25 46L 7.25 68L 8.75 68ZM 8 45.25L 6 45.25L 6 46.75L 8 46.75L 8 45.25ZM 6.75 46L 6.75 26L 5.25 26L 5.25 46L 6.75 46ZM 6 26.75L 8 26.75L 8 25.25L 6 25.25L 6 26.75ZM 8.75 26L 8.75 8L 7.25 8L 7.25 26L 8.75 26ZM 8 8.75L 102 8.75L 102 7.25L 8 7.25L 8 8.75ZM 101.25 8L 101.25 26L 102.75 26L 102.75 8L 101.25 8ZM 102 26.75L 104 26.75L 104 25.25L 102 25.25L 102 26.75ZM 103.25 26L 103.25 46L 104.75 46L 104.75 26L 103.25 26ZM 104 45.25L 102 45.25L 102 46.75L 104 46.75L 104 45.25ZM 101.25 46L 101.25 68L 102.75 68L 102.75 46L 101.25 46ZM 102 67.25L 80 67.25L 80 68.75L 102 68.75L 102 67.25ZM 64 179.25L 60 179.25L 60 180.75L 64 180.75L 64 179.25ZM 48 180.75L 52 180.75L 52 179.25L 48 179.25L 48 180.75ZM 48 140.75L 54 140.75L 54 139.25L 48 139.25L 48 140.75ZM 54 140.75L 58 140.75L 58 139.25L 54 139.25L 54 140.75ZM 58 140.75L 64 140.75L 64 139.25L 58 139.25L 58 140.75ZM 57.2509 140.037L 59.1509 178.037L 60.6491 177.963L 58.7491 139.963L 57.2509 140.037ZM 59.1509 178.037L 59.2509 180.037L 60.7491 179.963L 60.6491 177.963L 59.1509 178.037ZM 52.7491 180.037L 52.8491 178.037L 51.3509 177.963L 51.2509 179.963L 52.7491 180.037ZM 52.8491 178.037L 54.7491 140.037L 53.2509 139.963L 51.3509 177.963L 52.8491 178.037ZM 59.9 177.25L 52.1 177.25L 52.1 178.75L 59.9 178.75L 59.9 177.25ZM 15.25 174C 15.25 177.728 18.2721 180.75 22 180.75L 22 179.25C 19.1005 179.25 16.75 176.899 16.75 174L 15.25 174ZM 93.25 174C 93.25 176.899 90.8995 179.25 88 179.25L 88 180.75C 91.7279 180.75 94.75 177.728 94.75 174L 93.25 174ZM 104 0.75C 106.899 0.75 109.25 3.10051 109.25 6L 110.75 6C 110.75 2.27208 107.728 -0.75 104 -0.75L 104 0.75ZM 6 -0.75C 2.27208 -0.75 -0.75 2.27208 -0.75 6L 0.75 6C 0.75 3.10051 3.10051 0.75 6 0.75L 6 -0.75Z' />
            <g>
              <path transform='translate(1 1)' fill='black' fillOpacity='0.05' d='M 94 136C 94 112 110 104 110 80L 102 80C 102 96 86 116 86 128L 80 128L 56 128L 32 128L 24 128C 24 116 8 96 8 80L 0 80C 0 104 16 112 16 136L 16 174C 16 177.314 18.6863 180 22 180L 48 180L 48 140L 54 140L 58 140L 64 140L 64 180L 88 180C 91.3137 180 94 177.314 94 174L 94 136Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.05' d='M 110 6C 110 2.68629 107.314 0 104 0L 6 0C 2.68629 0 0 2.68629 0 6L 0 80L 8 80C 8 96 24 116 24 128L 32 128L 32 68L 8 68L 8 46L 6 46L 6 26L 8 26L 8 8L 102 8L 102 26L 104 26L 104 46L 102 46L 102 68L 80 68L 80 128L 86 128C 86 116 102 96 102 80L 110 80L 110 6Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.05' d='M 64 180L 64 140L 58 140L 59.9 178L 60 180L 64 180Z' />
              <path transform='translate(1 1)' fill='black' fillOpacity='0.05' d='M 48 140L 48 180L 52 180L 52.1 178L 54 140L 48 140Z' />
            </g>

            <path transform='translate(1 1)' fill='black' d='M 48 140L 48 139.25L 47.25 139.25L 47.25 140L 48 140ZM 64 140L 64.75 140L 64.75 139.25L 64 139.25L 64 140ZM 24 128L 23.25 128L 23.25 128.75L 24 128.75L 24 128ZM 86 128L 86 128.75L 86.75 128.75L 86.75 128L 86 128ZM 102 80L 102 79.25L 101.25 79.25L 101.25 80L 102 80ZM 8 80L 8.75 80L 8.75 79.25L 8 79.25L 8 80ZM 80 68L 80 67.25L 79.25 67.25L 79.25 68L 80 68ZM 32 68L 32.75 68L 32.75 67.25L 32 67.25L 32 68ZM 8 68L 7.25 68L 7.25 68.75L 8 68.75L 8 68ZM 8 46L 8.75 46L 8.75 45.25L 8 45.25L 8 46ZM 6 46L 5.25 46L 5.25 46.75L 6 46.75L 6 46ZM 6 26L 6 25.25L 5.25 25.25L 5.25 26L 6 26ZM 8 26L 8 26.75L 8.75 26.75L 8.75 26L 8 26ZM 8 8L 8 7.25L 7.25 7.25L 7.25 8L 8 8ZM 102 8L 102.75 8L 102.75 7.25L 102 7.25L 102 8ZM 102 26L 101.25 26L 101.25 26.75L 102 26.75L 102 26ZM 104 26L 104.75 26L 104.75 25.25L 104 25.25L 104 26ZM 104 46L 104 46.75L 104.75 46.75L 104.75 46L 104 46ZM 102 46L 102 45.25L 101.25 45.25L 101.25 46L 102 46ZM 102 68L 102 68.75L 102.75 68.75L 102.75 68L 102 68ZM 60 180L 59.2509 180.037L 59.2866 180.75L 60 180.75L 60 180ZM 52 180L 52 180.75L 52.7134 180.75L 52.7491 180.037L 52 180ZM 59.9 178L 60.6491 177.963L 60.6491 177.963L 59.9 178ZM 52.1 178L 51.3509 177.963L 51.3509 177.963L 52.1 178ZM 6 0.75L 104 0.75L 104 -0.75L 6 -0.75L 6 0.75ZM 109.25 6L 109.25 80L 110.75 80L 110.75 6L 109.25 6ZM 109.25 80C 109.25 91.8089 105.326 99.6705 101.329 107.665C 97.3262 115.67 93.25 123.809 93.25 136L 94.75 136C 94.75 124.191 98.6738 116.33 102.671 108.335C 106.674 100.33 110.75 92.1911 110.75 80L 109.25 80ZM 93.25 136L 93.25 174L 94.75 174L 94.75 136L 93.25 136ZM 88 179.25L 64 179.25L 64 180.75L 88 180.75L 88 179.25ZM -0.75 6L -0.75 80L 0.75 80L 0.75 6L -0.75 6ZM -0.75 80C -0.75 92.1911 3.32624 100.33 7.32918 108.335C 11.3262 116.33 15.25 124.191 15.25 136L 16.75 136C 16.75 123.809 12.6738 115.67 8.67082 107.665C 4.67376 99.6705 0.75 91.8089 0.75 80L -0.75 80ZM 15.25 136L 15.25 174L 16.75 174L 16.75 136L 15.25 136ZM 22 180.75L 48 180.75L 48 179.25L 22 179.25L 22 180.75ZM 48.75 180L 48.75 140L 47.25 140L 47.25 180L 48.75 180ZM 63.25 140L 63.25 180L 64.75 180L 64.75 140L 63.25 140ZM 101.25 80C 101.25 87.8024 97.3372 96.647 93.3214 105.181C 91.3282 109.416 89.3135 113.571 87.8021 117.413C 86.2939 121.246 85.25 124.854 85.25 128L 86.75 128C 86.75 125.146 87.7061 121.754 89.1979 117.962C 90.6865 114.179 92.6718 110.084 94.6786 105.819C 98.6628 97.353 102.75 88.1976 102.75 80L 101.25 80ZM 7.25 80C 7.25 88.1976 11.3372 97.353 15.3214 105.819C 17.3282 110.084 19.3135 114.179 20.8021 117.962C 22.2939 121.754 23.25 125.146 23.25 128L 24.75 128C 24.75 124.854 23.7061 121.246 22.1979 117.413C 20.6865 113.571 18.6718 109.416 16.6786 105.181C 12.6628 96.647 8.75 87.8024 8.75 80L 7.25 80ZM 8 79.25L 0 79.25L 0 80.75L 8 80.75L 8 79.25ZM 102 80.75L 110 80.75L 110 79.25L 102 79.25L 102 80.75ZM 80 128.75L 86 128.75L 86 127.25L 80 127.25L 80 128.75ZM 80.75 128L 80.75 68L 79.25 68L 79.25 128L 80.75 128ZM 56 128.75L 80 128.75L 80 127.25L 56 127.25L 56 128.75ZM 24 128.75L 32 128.75L 32 127.25L 24 127.25L 24 128.75ZM 32 128.75L 56 128.75L 56 127.25L 32 127.25L 32 128.75ZM 32.75 128L 32.75 68L 31.25 68L 31.25 128L 32.75 128ZM 32 67.25L 8 67.25L 8 68.75L 32 68.75L 32 67.25ZM 8.75 68L 8.75 46L 7.25 46L 7.25 68L 8.75 68ZM 8 45.25L 6 45.25L 6 46.75L 8 46.75L 8 45.25ZM 6.75 46L 6.75 26L 5.25 26L 5.25 46L 6.75 46ZM 6 26.75L 8 26.75L 8 25.25L 6 25.25L 6 26.75ZM 8.75 26L 8.75 8L 7.25 8L 7.25 26L 8.75 26ZM 8 8.75L 102 8.75L 102 7.25L 8 7.25L 8 8.75ZM 101.25 8L 101.25 26L 102.75 26L 102.75 8L 101.25 8ZM 102 26.75L 104 26.75L 104 25.25L 102 25.25L 102 26.75ZM 103.25 26L 103.25 46L 104.75 46L 104.75 26L 103.25 26ZM 104 45.25L 102 45.25L 102 46.75L 104 46.75L 104 45.25ZM 101.25 46L 101.25 68L 102.75 68L 102.75 46L 101.25 46ZM 102 67.25L 80 67.25L 80 68.75L 102 68.75L 102 67.25ZM 64 179.25L 60 179.25L 60 180.75L 64 180.75L 64 179.25ZM 48 180.75L 52 180.75L 52 179.25L 48 179.25L 48 180.75ZM 48 140.75L 54 140.75L 54 139.25L 48 139.25L 48 140.75ZM 54 140.75L 58 140.75L 58 139.25L 54 139.25L 54 140.75ZM 58 140.75L 64 140.75L 64 139.25L 58 139.25L 58 140.75ZM 57.2509 140.037L 59.1509 178.037L 60.6491 177.963L 58.7491 139.963L 57.2509 140.037ZM 59.1509 178.037L 59.2509 180.037L 60.7491 179.963L 60.6491 177.963L 59.1509 178.037ZM 52.7491 180.037L 52.8491 178.037L 51.3509 177.963L 51.2509 179.963L 52.7491 180.037ZM 52.8491 178.037L 54.7491 140.037L 53.2509 139.963L 51.3509 177.963L 52.8491 178.037ZM 15.25 174C 15.25 177.728 18.2721 180.75 22 180.75L 22 179.25C 19.1005 179.25 16.75 176.899 16.75 174L 15.25 174ZM 93.25 174C 93.25 176.899 90.8995 179.25 88 179.25L 88 180.75C 91.7279 180.75 94.75 177.728 94.75 174L 93.25 174ZM 104 0.75C 106.899 0.75 109.25 3.10051 109.25 6L 110.75 6C 110.75 2.27208 107.728 -0.75 104 -0.75L 104 0.75ZM 6 -0.75C 2.27208 -0.75 -0.75 2.27208 -0.75 6L 0.75 6C 0.75 3.10051 3.10051 0.75 6 0.75L 6 -0.75Z' />
          </svg>

          <svg width='112' height='182' viewBox='0 0 112 182'>
            <rect transform='translate(9 11)' width='95' height='56' fill='#222222' />
            <path transform='translate(17 20)' fill='#555555' fillRule='evenodd' clipRule='evenodd' d='M 3.20711 0.5L 17.7929 0.5L 15.7929 2.5L 5.20711 2.5L 3.20711 0.5ZM 21.5 4.20711L 19.5 6.20711L 19.5 14.7929L 21.5 16.7929L 21.5 4.20711ZM 21.5 22.2071L 19.5 24.2071L 19.5 32.7929L 21.5 34.7929L 21.5 22.2071ZM 2.5 14.7929L 0.5 16.7929L 0.5 4.20711L 2.5 6.20711L 2.5 14.7929ZM 2.5 32.7929L 0.5 34.7929L 0.5 22.2071L 2.5 24.2071L 2.5 32.7929ZM 14.7929 34.5L 6.20711 34.5L 4.20711 36.5L 16.7929 36.5L 14.7929 34.5ZM 17.2929 20.5L 4.70711 20.5L 3.70711 19.5L 4.70711 18.5L 17.2929 18.5L 18.2929 19.5L 17.2929 20.5ZM 31.2071 0.5L 45.7929 0.5L 43.7929 2.5L 33.2071 2.5L 31.2071 0.5ZM 49.5 4.20711L 47.5 6.20711L 47.5 14.7929L 49.5 16.7929L 49.5 4.20711ZM 49.5 22.2071L 47.5 24.2071L 47.5 32.7929L 49.5 34.7929L 49.5 22.2071ZM 30.5 14.7929L 30.5 6.20711L 28.5 4.20711L 28.5 16.7929L 30.5 14.7929ZM 30.5 32.7929L 30.5 24.2071L 28.5 22.2071L 28.5 34.7929L 30.5 32.7929ZM 42.7929 34.5L 34.2071 34.5L 32.2071 36.5L 44.7929 36.5L 42.7929 34.5ZM 45.2929 20.5L 32.7071 20.5L 31.7071 19.5L 32.7071 18.5L 45.2929 18.5L 46.2929 19.5L 45.2929 20.5ZM 59.2071 0.5L 61.2071 2.5L 71.7929 2.5L 73.7929 0.5L 59.2071 0.5ZM 77.5 4.20711L 75.5 6.20711L 75.5 14.7929L 77.5 16.7929L 77.5 4.20711ZM 77.5 22.2071L 75.5 24.2071L 75.5 32.7929L 77.5 34.7929L 77.5 22.2071ZM 58.5 14.7929L 58.5 6.20711L 56.5 4.20711L 56.5 16.7929L 58.5 14.7929ZM 58.5 32.7929L 58.5 24.2071L 56.5 22.2071L 56.5 34.7929L 58.5 32.7929ZM 70.7929 34.5L 62.2071 34.5L 60.2071 36.5L 72.7929 36.5L 70.7929 34.5ZM 73.2929 20.5L 60.7071 20.5L 59.7071 19.5L 60.7071 18.5L 73.2929 18.5L 74.2929 19.5L 73.2929 20.5Z' />

            <path transform='translate(0.25 0.25)' fill='black' fillRule='evenodd' clipRule='evenodd' d='M 6.75 0C 3.02208 0 0 3.02208 0 6.75L 0 80.75C 0 92.9271 4.06685 101.061 8.06534 109.058L 8.07918 109.085C 12.0762 117.08 16 124.941 16 136.75L 16 174.75C 16 178.478 19.0221 181.5 22.75 181.5L 88.75 181.5C 92.4779 181.5 95.5 178.478 95.5 174.75L 95.5 136.75C 95.5 124.941 99.4238 117.08 103.421 109.085L 103.435 109.058C 107.433 101.061 111.5 92.9271 111.5 80.75L 111.5 6.75C 111.5 3.02208 108.478 0 104.75 0L 6.75 0ZM 9 11L 103.5 11L 103.5 66.5L 9 66.5L 9 11Z' />

            <path transform='translate(28 95)' fill='#454545' fillRule='evenodd' clipRule='evenodd' d='M 17.2735 31.5761L 17.3317 31.4252L 19.6217 25.4915L 9.65423 3.92811L 0.998578 0.881541L 12.53 23.9949L 12.5909 24.117L 12.5814 24.2532L 12.0032 32.4933L 22.6898 52.1299L 17.3147 31.7326L 17.2735 31.5761ZM 38.7265 31.5761L 38.6853 31.7326L 33.3103 52.13L 43.9969 32.4933L 43.4188 24.2532L 43.4093 24.117L 43.4702 23.9949L 55.0016 0.881525L 46.3461 3.92793L 36.3786 25.4915L 38.6683 31.4252L 38.7265 31.5761Z' />
          </svg>

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
