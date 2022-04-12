<template>
  <v-app id="app">
    <scale-loader v-if="loading" :loading="loading" color="#3c3449"></scale-loader>
    <div v-else>
      <header class="header">
        <div class="container">
          <div class="header__wrap">
            <div class="header__logo" @click="returnToMainPage">
              <v-icon
                large
                color="white"
              >
                mdi-music
              </v-icon>
            </div>
            <h1 class="header__title">Music Wiki</h1>
          </div>
        </div>
      </header>
      <router-view/>
    </div>
  </v-app>
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
    this.$root.$on('sendQueryData', this.setRoute);
  },
  methods: {
    ...mapActions(['getArtistData']),
    setRoute(pathData) {
      const path = `/${pathData.dataType}/${pathData.value}`;
      this.changeRoute(path);
    },
    returnToMainPage() {
      this.changeRoute('/');
    },
    changeRoute(path) {
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
    align-items: center;
  }

  &__title {
    color: #fff;
    margin: 0;
  }
}
</style>
