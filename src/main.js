import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

import 'bootstrap/dist/css/bootstrap.css' // << import CSS
import 'font-awesome/css/font-awesome.css' // << import CSS

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

