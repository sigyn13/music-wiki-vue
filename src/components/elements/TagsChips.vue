<template>
  <div class="tags">
    <v-chip
      class="tags__item"
      @click="sendQueryData(tag)"
      v-for="(tag, idx) in data"
      :key="`idx-${idx}`"
      color="primary"
      text-color="text"
    >
      {{tag}}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array, default: () => [],
    },
  },
  name: 'TagsChips',
  methods: {
    sendQueryData(tag) {
      this.$root.$emit('sendQueryData', { value: tag, dataType: 'tag' });
    },
  },
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
    padding: 20px 15px;
    border-radius: 15px;
    margin: 0 10px 10px 0;
    font-size: 18px !important;
    &:last-child {
      margin: 0 0 10px 0;
    }
  }
}
</style>
