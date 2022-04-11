<template>
  <div class="tracks">
    <div class="tracks__wrap">
      <h3 class="tracks__title">{{title}}</h3>
      <img src="../assets/images/listners.svg" alt="">
    </div>
    <table class="tracks__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Listeners</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="tracks__item"
          v-for="(track, idx) in tracks"
          :key="`track-${idx}`"
        >
          <td>{{track.name}}</td>
          <td>{{track.listeners | roundNumbers}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tracks',
  props: {
    title: {
      type: String, default: '',
    },
    tracks: {
      type: Array, default: () => [],
    },
  },
  filters: {
    roundNumbers(value) {
      if (!value) return '';
      const numberValue = Math.abs(Number(value));
      let formattedValue = null;
      switch (true) {
        case numberValue >= 1.0e+9: formattedValue = `${(numberValue / 1.0e+9).toFixed(2)}B`;
          break;
        case numberValue >= 1.0e+6: formattedValue = `${(numberValue / 1.0e+6).toFixed(2)}M`;
          break;
        case numberValue >= 1.0e+3: formattedValue = `${(numberValue / 1.0e+3).toFixed(2)}K`;
          break;
        default: formattedValue = numberValue.toFixed(2);
      }
      return formattedValue;
    },
  },
};
</script>

<style lang="scss">
.tracks {
  margin: 0 35px 35px 0;

  &__wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    img {
      max-width: 27px;
      max-height: 27px;
    }
  }

  &__title {
    font-size: 24px;
    margin: 0;
  }

  &__table {
    display: block;
    text-align: left;
    border-collapse: collapse;

    thead {
      background: rgb(241, 241, 241);

      th {
        padding: 10px;
      }
    }

    tbody {
      td {
         padding: 10px;
         width: 20%;
        &:first-child {
          width: 80%;
          border-right: 1px solid rgb(241, 241, 241);
        }
      }
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
  }
}
</style>
