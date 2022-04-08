<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__wrap">
          <img src="./assets/images/icon.svg">
          <h1 class="header__title">Music Wiki Searcher</h1>
        </div>
      </div>
    </header>
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue';
import LastFM from '../node_modules/last-fm';

export default {
  name: 'App',
  components: {
    Main,
  },
  data() {
    return {
      dataTest: {},
    };
  },
  mounted() {
    this.test();
  },
  computed: {},
  methods: {
    test() {
      const lastfm = new LastFM('4b9451697654bdc145a890d6f4fb5f7b', { userAgent: 'Music Wiki Searcher' });

      lastfm.tagTopTags({}, (err, data) => {
        if (err) console.error(err);
        else this.dataTest = data;
      });
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
