<template>
  <div class="track container">
    <div class="track__head">
      <div class="track__head-wrap">
        <div class="track__bio">
          <h3 class="track__title">{{track.name}}</h3>
          <!-- {{track.wiki.content}} -->
        </div>
      </div>
      <!-- <tracks-chips :tracks="artist.tracks" /> -->
    </div>
    <!-- <div class="track__body">
      <div class="track__left-col">
        <Tracks-table :tracks="artistData.tracks" title="Top tracks" />
        <Similar-artists :similars="artist.similar" title="Similar artists" />
      </div>
      <div class="track__right-col">
        <AlbumsGrid :albums="artistData.albums" title="Top albums" />
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TrackDisplay',
  computed: {
    ...mapGetters(['trackData']),
    track() {
      return this.trackData.data;
    },
  },
};
</script>

<style lang="scss">
.track {
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
