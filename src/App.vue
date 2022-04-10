<template>
  <div id="app">
    <scale-loader v-if="loading" :loading="loading" color="#3c3449"></scale-loader>
    <div v-else>
      <header class="header">
        <div class="container">
          <div class="header__wrap">
            <img src="./assets/images/icon.svg">
            <h1 class="header__title">Music Wiki</h1>
          </div>
        </div>
      </header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    ScaleLoader,
  },
  computed: {
    ...mapGetters(['loading']),
  },
  mounted() {
    this.$root.$on('setRoute', this.setRoute);
  },
  methods: {
    ...mapActions(['getArtistData']),
    setRoute(nameValue) {
      const path = `/${nameValue}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  background: #3c3449;
  margin-bottom: 60px;

  &__wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__title {
    color: #fff;
  }
}
</style>
