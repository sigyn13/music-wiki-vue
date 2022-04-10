<template>
  <div class="content container">
    <div class="content__head">
      <div class="content__head-wrap">
        <img src="../assets/images/404img.png" alt="" class="content__img">
        <h3 class="content__title">{{artist.name}}</h3>
      </div>
      <div class="content__head-wrap">
        <p class="content__bio">
          <span>Bio: </span>
          {{artist.summary.substring(0, 1000)}}
          <a class="content__link" :href="`${artist.url}/+wiki`" target="_blank">
            ...more
          </a>
        </p>
      </div>
      <Tags :tags="artist.tags" />
    </div>
    <div class="content__body">
      <div class="content__left-col">
        <Tracks :tracks="artistData.tracks" title="Top tracks" />
        <Similar-artists :similars="artist.similar" title="Similar artists" />
      </div>
      <div class="content__right-col">
        <Albums :albums="artistData.albums" title="Top albums" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Content',
  computed: {
    ...mapGetters(['artistData']),
    artist() {
      return this.artistData.data;
    },
  },
  watch: {
    '$route.params.value': {
      handler(value) {
        if (value) {
          this.getArtistData(value);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['getArtistData']),
    search(value) {
      this.$root.$emit('setRoute', value);
    },
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  &__head {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 35px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    &-wrap {
      max-width: 65%;
    }
  }

  &__bio {
    margin: 0;
    font-size: 22px;
    span {
      font-weight: bold;
    }
  }

  &__title {
    margin: 30px 0 0;
    font-size: 28px;
    text-align: center;
  }

  &__img {
    max-width: 200px;
    object-fit: contain;
  }

  &__subtitle {
    font-size: 24px;
    margin: 0 0 20px;
  }

  &__link {
    color: inherit;
    display: inline-block;
    cursor: pointer;
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__left-col {
    display: flex;
    flex-direction: column;
    width: 35%;
    margin-right: 35px;
  }

  &__right-col {
    width: 60%;
    display: flex;
    flex-direction: column;
  }

}
</style>
