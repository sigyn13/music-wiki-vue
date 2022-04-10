<template>
  <div class="about">
    <Content />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentViewValue: this.$route.params.value,
    };
  },

};
</script>
