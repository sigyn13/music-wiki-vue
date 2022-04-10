<template>
  <div class="tracks">
    <h3 class="tracks__title">{{title}}</h3>
    <div
      class="tracks__item"
      v-for="(track, idx) in tracks"
      :key="`track-${idx}`"
    >
      <p class="tracks__name">{{track.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tracks',
  props: {
    title: {
      type: String, default: '',
    },
    tracks: {
      type: Array, default: () => [],
    },
  },
};
</script>

<style lang="scss">
.tracks {
  margin: 0 35px 35px 0;

  &__title {
    font-size: 24px;
    margin: 0 0 20px;
  }

}
</style>
