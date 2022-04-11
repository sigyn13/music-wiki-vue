<template>
  <div class="similar">
    <h3 class="similar__title">{{title}}</h3>
    <div class="similar__wrap">
      <div
        class="similar__item"
        v-for="(similar, idx) in similars"
        :key="`idx-${idx}`"
        @click="search(similar.name)"
      >
        <img src="../assets/images/404img.png" alt="" class="similar__img">
        <h3>{{similar.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarArtists',
  props: {
    similars: {
      type: Array, default: () => [],
    },
    title: {
      type: String, default: '',
    },
  },
};
</script>

<style lang="scss">
  .similar {

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }

    &__title {
      font-size: 24px;
      margin: 0 0 20px;
    }

    &__item {
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

    &__img {
      width: 100px;
      max-height: 100px;
      object-fit: cover;
      // border-radius: 50%;
      transition: 0.6s;
      &:hover {
        -webkit-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 3px 37px -1px rgba(34, 60, 80, 0.2);
      }
    }
  }

</style>
