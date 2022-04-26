<template>
  <component v-bind:is="currentDataType"></component>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ContentView',
  data() {
    return {};
  },
  watch: {
    '$route.params': {
      handler(data) {
        if (data) {
          if (data.type === 'artist') {
            this.getArtistData(data.value);
          }
          if (data.type === 'tag') {
            this.getTagData(data.value);
          }
          if (data.type === 'track') {
            this.getTrackData(data.value);
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    currentDataType() {
      return `${this.$route.params.type}Display`;
    },
  },
  methods: {
    ...mapActions(['getArtistData', 'getTagData', 'getTrackData']),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
