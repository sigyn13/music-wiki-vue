<template>
  <div class="content container">
    <div class="content__head">
      <div class="content__head-wrap">
        <img src="../assets/images/404img.png" alt="" class="content__img">
        <h3 class="content__title">{{artist.name}}</h3>
      </div>
      <div class="content__head-wrap">
        <p class="content__text">
          <span>Bio: </span>
          {{artist.summary.substring(0, 1000)}}
          <a class="content__link" :href="`${artist.url}/+wiki`" target="_blank">
            ...more
          </a>
        </p>
      </div>
      <Tags-chips :data="artist.tags" />
    </div>
    <div class="content__body">
      <div class="content__left-col">
        <TopTracks :data="artistData.tracks" title="Top tracks" :isArtistPage="true"/>
        <TopArtists :data="artist.similar" title="Similar artists" :isArtistPage="true" />
      </div>
      <div class="content__right-col">
        <TopAlbums :data="artistData.albums" title="Top albums" :isArtistPage="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArtistDisplay',
  computed: {
    ...mapGetters(['artistData']),
    artist() {
      return this.artistData.data;
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

  &__text {
    margin: 0;
    font-size: 18px;
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
    width: 28%;
    margin-right: 35px;
  }

  &__right-col {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

}
</style>
