<template>
  <div class="form">
    <main-input v-model="inputValue" />
  </div>
</template>

<script>

export default {
  name: 'MainForm',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {},
};
</script>
