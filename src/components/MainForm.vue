<template>
  <div class="form">
    <div class="input">
      <span>Введите имя/название артиста</span>
      <input
        v-model="inputValue"
        type="text"
        class="input__field"
        placeholder="Search...">
    </div>
    <main-button @btnEvent="search" type="sumbit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainForm',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    ...mapActions(['getSearchValue']),
    search() {
      this.getSearchValue(this.inputValue);
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
