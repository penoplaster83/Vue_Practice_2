/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('dateformat', dateFilter)

// Объект конфигурации Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB-pCkvy3GZmVs6hHDnx_qqN_rxH_1Y6wM',
  authDomain: 'vue-crm-proj.firebaseapp.com',
  databaseURL: 'ht tps://vue-crm-proj.firebaseio.com',
  projectId: 'vue-crm-proj',
  storageBucket: 'vue-crm-proj.appspot.com',
  messagingSenderId: '511793825559',
  appId: '1:511793825559:web:6f626e26516d0111561952',
  measurementId: 'G-F1LNK2LP9S'
}

// Подключаемся к firebase
// с использованием объекта конфигурации
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
