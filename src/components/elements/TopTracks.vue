<template>
  <div class="tracks-content">
    <div class="tracks" v-if="isArtistPage">
      <div class="tracks__head">
        <v-icon
          color="white"
        >
          mdi-play-box-multiple
        </v-icon>
        <h3 class="tracks__title">{{title}}</h3>
      </div>
      <v-simple-table class="tracks__table">
          <tbody>
            <tr
              v-for="(track, idx) in sortedData"
              :key="`track-${idx}`"
              @click="sendQueryData({name: track.name, artistName: track.artistName})"
            >
              <td>{{ track.name }}</td>
              <td>{{ track.listeners | roundNumbers }}</td>
            </tr>
          </tbody>
      </v-simple-table>
    </div>
    <v-simple-table class="tracks-content__table" v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Artist
            </th>
            <th class="text-right">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(track, idx) in sortedData"
            :key="`track-${idx}`"
            class="tracks-content__str"
          >
            <td>{{ track.name }}</td>
            <td>{{ track.artist.name }}</td>
            <td class="text-right">{{ track.duration | durationFormat }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'TopTracks',
  props: {
    data: {
      type: Array, default: () => [],
    },
    isArtistPage: {
      type: Boolean, default: false,
    },
    title: {
      type: String, default: '',
    },
  },
  computed: {
    sortedData() {
      return this.isArtistPage ? this.data.slice(0, 6) : this.data;
    },
  },
  filters: {
    durationFormat(value) {
      const minutes = Math.floor(value / 60);
      const seconds = value - minutes * 60;
      return value > 0 ? `${minutes}m ${seconds}sec` : '';
    },
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
  methods: {
    sendQueryData(data) {
      this.$root.$emit('sendQueryData', { data, dataType: 'track' });
    },
  },
};
</script>

<style lang="scss">
.tracks-content {

  &__str {
    cursor: pointer
  }
}

.tracks {
  margin: 0 0 35px 0;

  &__head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: var(--v-primary-base);
    color: var(--v-white-base);
    padding: 12px 16px;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0892857143em;
    line-height: normal;
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
  }

  &__table {
    display: block;
    text-align: left;
    border-collapse: collapse;

    tbody {
      td {
         padding: 10px;
         width: 20%;
         cursor: pointer;
         font-size: 18px !important;
        &:first-child {
          width: 80%;
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
