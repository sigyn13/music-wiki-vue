<template>
  <div class="content container">
    <div class="content__head">
      <div class="content__head-wrap">
        <img src="../assets/images/404img.png" alt="" class="content__artist-img">
        <h3 class="content__title">{{artist.name}}</h3>
      </div>
      <div class="content__head-wrap">
        <p class="content__bio"><span>Bio: </span>{{artist.summary.substring(0, 1000)}}
          <a class="content__link" :href="`${artist.url}/+wiki`" target="_blank">
            ...more
          </a>
        </p>
      </div>
      <div class="content__tags">
        <p
          class="content__tag"
          v-for="(tag, idx) in artist.tags"
          :key="`idx-${idx}`"
        >
          {{tag}}
        </p>
      </div>
    </div>
    <div class="container__row">
      <div class="container__col">
        <top-ratings />
      </div>
      <div class="container__col">
        <div class="content__wrap content__wrap_column">
          <h3 class="content__subtitle">Top albums</h3>
          <div class="content__albums">
            <div
              class="content__album-item"
              v-for="(album, idx) in albums"
              :key="`idx-${idx}`"
            >
              <img v-if="album.images.length" :src="album.images[3]" alt="">
              <img v-else src="../assets/images/404img.png" alt="">
              <h3>{{album.name}}</h3>
            </div>
          </div>
        </div>
        <div class="content__wrap content__wrap_column">
            <h3 class="content__subtitle">Similar artists</h3>
          <div class="content__similar">
            <div
              class="content__similar-item"
              v-for="(similar, idx) in artist.similar"
              :key="`idx-${idx}`"
              @click="getSearchValue(similar.name)"
            >
              <img src="../assets/images/404img.png" alt="" class="content__similar-img">
              <h3>{{similar.name}}</h3>
            </div>
          </div>
        </div>
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
    albums() {
      return this.artistData.albums;
    },
    tracks() {
      return this.artistData.tracks;
    },
  },
  methods: {
    ...mapActions(['getSearchValue']),
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  &__albums {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    &_column {
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
    }
  }

  &__bio {
    margin: 0;
    font-size: 22px;
    span {
      font-weight: bold;
    }
  }

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
  &__title {
    margin: 30px 0 0;
    font-size: 28px;
    text-align: center;
  }

  &__artist-img {
    max-width: 200px;
    object-fit: contain;
  }

  &__subtitle {
    font-size: 24px;
    margin: 0 0 20px;
  }

  &__tags {
    margin: 30px 0 0;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    width: 100%;
  }
  &__tag {
    background: rgb(241, 241, 241);
    padding: 10px;
    border-radius: 15px;
    margin: 0 10px 10px 0;
    transition: 0.6s;
    &:last-child {
      margin: 0 0 10px 0;
    }

  }
  &__album-item {
    margin-bottom: 20px;
    margin-right: 20px;
    max-width: 250px;
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
      max-width: 250px;
      margin-right: 20px;
      &:nth-child(3) {
        margin-right: 0;
      }
      &:nth-child(6) {
        margin-right: 0;
      }
    }

    img {
      max-width: 100%;
      object-fit: contain;
      transition: .6s;
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

  &__link {
    color: inherit;
    display: inline-block;
    cursor: pointer;
  }

  &__similar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      margin-right: 15px;
      text-align: center;
      width: 150px;
      &:last-child {
        margin: 0;
      }
    }

    &-img {
      width: 100px;
      max-height: 100px;
      object-fit: cover;
      border-radius: 50%;
      transition: 0.6s;
      &:hover {
        -webkit-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
      }
    }

    h3 {
      font-size: 18px;
    }
  }

}
</style>
