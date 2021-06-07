import Vue from 'vue'
import Vuex from 'vuex'
// import location from './location'
// import * as types from 'src/store/location/types'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  return new Vuex.Store({
    state: {
      location: null
    },
    getters: {
      location: state => state.location
    },
    mutations: {
      updateStatus (state, status) {
        Vue.set(state, 'location', status)
      }
    },
    actions: {
      modifyLocation ({ commit }, value) {
        commit('updateStatus', value)
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
}
