import styles from './index.sass'

import {h, render} from 'preact'

let root
function init() {
  let App = require('./components/App').default
  root = render(<App class={styles.app}/>, document.querySelector('#app'), root)
}

init()

if (module.hot) {
  module.hot.accept('./components/App', () => window.requestAnimationFrame(() => {
    console.warn('Hot reloading...');
    init()
  }))
}
