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
    tag: {
      data: {},
      artists: {},
      tracks: {},
      albums: {},
      similar: {},
    },
    track: {
      data: {},
      tags: {},
      similar: {},
    },
    loading: false,
  },
  mutations: {
    loadingStatus(state, value) {
      state.loading = value;
    },
    setArtistData(state, data) {
      state.artist.data = data;
    },
    setArtistTracks(state, data) {
      state.artist.tracks = data.result;
    },
    setArtistAlbums(state, data) {
      state.artist.albums = data.result;
    },
    setTagData(state, data) {
      state.tag.data = data;
    },
    setTagArtists(state, data) {
      state.tag.artists = data;
    },
    setTagAlbums(state, data) {
      state.tag.albums = data;
    },
    setTagSimilar(state, data) {
      state.tag.similar = data;
    },
    setTagTracks(state, data) {
      state.tag.tracks = data;
    },
    setTrackData(state, data) {
      state.track.data = data;
    },
    setTrackSimilar(state, data) {
      state.track.similar = data;
    },
    setTrackTags(state, data) {
      state.track.tags = data;
    },
  },
  actions: {
    getArtistData({ commit }, value) {
      commit('loadingStatus', true);

      lastfm.artistInfo({ name: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistData', data);
      });
      lastfm.artistTopTracks({ name: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistTracks', data);
      });
      lastfm.artistTopAlbums({ name: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setArtistAlbums', data);
      });

      commit('loadingStatus', false);
    },
    getTagData({ commit }, value) {
      commit('loadingStatus', true);

      lastfm.tagInfo({ tag: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTagData', data);
      });
      lastfm.tagTopArtists({ tag: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTagArtists', data);
      });
      lastfm.tagTopAlbums({ tag: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTagAlbums', data);
      });
      lastfm.tagTopTracks({ tag: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTagTracks', data);
      });
      lastfm.tagSimilar({ tag: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTagSimilar', data);
      });

      commit('loadingStatus', false);
    },
    getTrackData({ commit }, value) {
      commit('loadingStatus', true);

      lastfm.trackInfo({ track: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTrackData', data);
      });
      lastfm.trackTopTags({ track: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTrackTags', data);
      });
      lastfm.trackSimilar({ track: value }, (err, data) => {
        if (err) console.error(err);
        else commit('setTrackSimilar', data);
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
    tagData(state) {
      return state.tag;
    },
    trackData(state) {
      return state.track;
    },
  },
  modules: {
  },
});
