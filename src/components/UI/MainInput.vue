<template>
  <div class="input">
    <span>{{label}}</span>
    <input
      v-bind="{...$attrs}"
      @change="checkEvent($event.target.value)"
      type="text"
      class="input__field"
      placeholder="Search...">
  </div>
</template>

<script>
export default {
  name: 'MainInput',
  props: {
    label: {
      type: String, default: 'Введите имя/название артиста',
    },
  },
  methods: {
    checkInputEvent(e) {
      this.$emit('input', e);
    },
  },
};
</script>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
}
</style>
