<template>
  <div class="albums">
    <div class="albums__head" v-if="isArtistPage">
      <v-icon
        color="white"
      >
        mdi-album
      </v-icon>
      <h3 class="albums__title">{{title}}</h3>
    </div>
    <div class="albums__wrap">
      <div
        class="albums__item"
        v-for="(album, idx) in sortedData"
        :key="`idx-${idx}`"
      >
        <img v-if="isArtistPage" :src="album.images[3]" alt="">
        <!-- <img v-if="isRating" :src="album.image[3].#text" alt=""> -->
        <h3>{{album.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopAlbums',
  props: {
    data: {
      type: Array, default: () => [],
    },
    title: {
      type: String, default: '',
    },
    isArtistPage: {
      type: Boolean, default: false,
    },
  },
  computed: {
    sortedData() {
      return this.isArtistPage ? this.data.slice(0, 6) : this.data;
    },
  },
};
</script>

<style lang="scss">
.albums {

  &__head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: var(--v-primary-base);
    color: var(--v-white-base);
    margin: 0 0 20px;
    padding: 12px 16px;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0892857143em;
    line-height: normal;
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &__item {
    margin-bottom: 20px;
    margin-right: 20px;
    max-width: 200px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      flex-direction: row;
      &:nth-child(odd) {
        margin-right: 25px;
      }
      &:nth-child(even) {
        margin-right: 0;
      }
    }
    @media screen and (min-width: 1200px) {
      max-width: 200px;
      margin-right: 10%;
      margin-bottom: 30px;
      &:nth-child(3), &:nth-child(6) {
        margin-right: 0;
      }
    }

    img {
      max-width: 100%;
      object-fit: contain;
      transition: .6s;
      display: block;
      &:hover {
        transform: scale(1.1);
        -webkit-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
      }
    }

    h3 {
      text-align: center;
      margin-top: 15px;
      max-width: 100%;
    }
  }
}
</style>
