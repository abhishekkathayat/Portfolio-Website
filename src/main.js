import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/styles/index.css';

library.add(faExternalLinkAlt)
library.add(faBars)
library.add(faCaretRight)
library.add(faFolderOpen)
library.add(faGithub)
library.add(faLinkedinIn)
library.add(faMediumM)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
