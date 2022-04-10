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
      type: String, default: '',
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
  span {
    margin-bottom: 20px;
  }

  &__field {
    border: 1px solid #3c3449;
    border-radius: 5px;
    padding: 10px 5px;
    color: #3c3449;
    outline: none;
  }
}
</style>
