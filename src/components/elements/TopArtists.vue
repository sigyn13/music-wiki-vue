<template>
  <div class="artist">
    <div class="artist__head">
      <v-icon
        color="white"
      >
        mdi-guitar-electric
      </v-icon>
      <h3 class="artist__title">{{title}}</h3>
    </div>
    <div class="artist__wrap">
      <div
        class="artist__item"
        v-for="(artist, idx) in sortedData"
        :key="`idx-${idx}`"
        @click="sendQueryData(artist.name)"
      >
        <img src="../../assets/images/404img.png" alt="" class="artist__img">
        <h3>{{artist.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopArtists',
  props: {
    data: {
      type: Array, default: () => [],
    },
    title: {
      type: String, default: '',
    },
    // isArtistPage: {
    //   type: Boolean, default: false,
    // },
  },
  computed: {
    sortedData() {
      // return this.isArtistPage ? this.data.slice(0, 5) : this.data;
      return this.data.slice(0, 5);
    },
  },
  methods: {
    sendQueryData(name) {
      this.$root.$emit('sendQueryData', { value: name, dataType: 'artist' });
    },
  },
};
</script>

<style lang="scss">
  .artist {

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

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;
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

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      margin-right: 15px;
      text-align: center;
      width: 140px;
      margin-bottom: 20px;
      &:nth-child(even) {
        margin-right: 0;
      }

      h3 {
        font-size: 18px;
        margin-top: 10px;
      }
    }

    &__img {
      width: 100px;
      max-height: 100px;
      object-fit: cover;
      transition: 0.6s;
      &:hover {
        -webkit-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
      }
    }
  }

</style>
