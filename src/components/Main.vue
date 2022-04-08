<template>
  <div class="container">
    <div class="container__wrap">
     <div class="top">
       <div class="top__artists">

       </div>
       <div class="top__tags">

       </div>
       <div class="top__albums">

       </div>
     </div>
    <div class="content">
      <main-form />
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      test: {},
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  padding: 0 18px;
  &__wrap {
    display: flex;
    justify-content: space-between;
  }
}

.top {
  width: 35%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 690px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 960px;
  }
}
</style>
