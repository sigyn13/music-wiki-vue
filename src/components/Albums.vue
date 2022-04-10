<template>
  <div class="albums">
    <h3 class="albums__title">{{title}}</h3>
    <div class="albums__wrap">
      <div
        class="albums__item"
        v-for="(album, idx) in albums"
        :key="`idx-${idx}`"
      >
        <img v-if="album.images.length" :src="album.images[3]" alt="">
        <img v-else src="../assets/images/404img.png" alt="">
        <h3>{{album.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Albums',
  props: {
    albums: {
      type: Array, default: () => [],
    },
    title: {
      type: String, default: '',
    },
  },
};
</script>

<style lang="scss">
.albums {

  &__title {
    font-size: 24px;
    margin: 0 0 20px;
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
      max-width: 250px;
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
}
</style>
