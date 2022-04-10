<template>
  <button :type="type" @click="btnEvent">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    label: {
      type: String, default: 'Search',
    },
    type: {
      type: String, default: 'button',
    },
  },
  methods: {
    btnEvent() {
      this.$emit('btnEvent');
    },
  },
};
</script>
