<template>
  <v-form
    class="form"
    ref="form"
  >
    <v-text-field
      v-model="inputValue"
      label="Search"
      clearable
    ></v-text-field>
    <v-btn color="primary" @click="search" depressed>
      Search
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'MainForm',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    search() {
      this.$root.$emit('sendQueryData', { value: this.inputValue, dataType: 'artist' });
    },
  },
};
</script>

<style lang="scss">
</style>
