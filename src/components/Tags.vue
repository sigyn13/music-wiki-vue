<template>
  <div class="tags">
    <p
      class="tags__item"
      v-for="(tag, idx) in tags"
      :key="`idx-${idx}`"
    >
      {{tag}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array, default: () => [],
    },
  },
  name: 'Tags',
};
</script>

<style lang="scss">
.tags {
    margin: 30px 0 0;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    width: 100%;
  &__item {
    background: rgb(241, 241, 241);
    padding: 10px;
    border-radius: 15px;
    margin: 0 10px 10px 0;
    transition: 0.6s;
    &:last-child {
      margin: 0 0 10px 0;
    }
  }
}
</style>
