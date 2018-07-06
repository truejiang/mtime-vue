import * as types from './mutation-types'

const mutations = {
  [types.SET_LOCATION_INFO] (state, locationInfo) {
    state.locationInfo = locationInfo
  },
  [types.SET_HOT_PLAY_MOVIES] (state, hotPlayMovies) {
    state.hotPlayMovies = hotPlayMovies
  }
}

export default mutations
