import Vue from 'vue'
import Vuex from 'vuex'
import firebase_images from './modules/firebase_images';
import realisations_best from './modules/realisations_best';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    firebase_images,
    realisations_best
  }
})
