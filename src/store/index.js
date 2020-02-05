import Vue from 'vue'
import Vuex from 'vuex'
import carousel from './modules/carousel';
import realisations from './modules/realisations';
import offerIcons from './modules/offerIcons';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    carousel,
    realisations,
    offerIcons
  }
})
