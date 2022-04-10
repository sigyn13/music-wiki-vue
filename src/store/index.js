import Vue from 'vue';
import Vuex from 'vuex';
import LastFM from '../../node_modules/last-fm';

Vue.use(Vuex);

const lastfm = new LastFM('4b9451697654bdc145a890d6f4fb5f7b', { userAgent: 'Music Wiki Searcher' });

export default new Vuex.Store({
  state: {
    artist: {
      data: {},
      tracks: {},
      albums: {},
    },
    loading: false,
  },
  mutations: {
    setArtistData(state, data) {
      state.artist.data = data;
    },
    setArtistTracks(state, data) {
      state.artist.tracks = data.result.slice(0, 6);
    },
    setArtistAlbums(state, data) {
      state.artist.albums = data.result.slice(0, 6);
    },
    loadingStatus(state, value) {
      state.loading = value;
    },
  },
  actions: {
    getArtistData({ commit }, nameValue) {
      commit('loadingStatus', true);

      lastfm.artistInfo({ name: nameValue }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistData', data);
      });
      lastfm.artistTopTracks({ name: nameValue }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistTracks', data);
      });
      lastfm.artistTopAlbums({ name: nameValue }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistAlbums', data);
      });

      commit('loadingStatus', false);
    },
  },
  getters: {
    artistData(state) {
      return state.artist;
    },
    loading(state) {
      return state.loading;
    },
  },
  modules: {
  },
});
