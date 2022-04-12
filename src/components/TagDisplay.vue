<template>
  <div class="tag container">
    <div class="tag__head">
      <div class="tag__head-wrap">
        <h3 class="tag__title">{{tag.name}}</h3>
        <p v-html-safe="tagWiki" class="tag__text"></p>
      </div>
    </div>
    <div class="tag__body">
      <div class="tag__left-col">
        <TopArtists :data="tagData.artists.artist" title="Top Artists" />
      </div>
      <div class="tag__right-col">
        <v-tabs
          class="tag__tabs"
          fixed-tabs
          background-color="primary"
          v-model="tabs"
          dark
        >
          <v-tab v-for="(tab, idx) in tagContentData" :key="`tab-${idx}`">
            <v-icon
              color="white"
              class="tag__tab-icon"
            >
              {{tab.icon}}
            </v-icon>
            {{tab.title}}
          </v-tab>
        </v-tabs>
        <component v-bind:is="currentTabContentComponent" :data="currentTab.data"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TagDisplay',
  data() {
    return {
      tabs: 0,
    };
  },
  computed: {
    ...mapGetters(['tagData']),
    tag() {
      return this.tagData?.data;
    },
    tagWiki() {
      return this.tag.wiki?.summary;
    },
    tagContentData() {
      return [
        {
          title: 'Top tracks',
          icon: 'mdi-play-box-multiple',
          data: this.tagData?.tracks?.track,
          type: 'Tracks',
        },
        // {
        //   title: 'Top artist',
        //   icon: 'mdi-guitar-electric',
        //   data: this.tagData?.artists?.artist,
        //   type: 'artists',
        // },
        {
          title: 'Top albums',
          icon: 'mdi-album',
          data: this.tagData?.albums?.album,
          type: 'Albums',
        },
      ];
    },
    currentTab() {
      return this.tagContentData[this.tabs];
    },
    currentTabContentComponent() {
      return `Top${this.tagContentData[this.tabs].type}`;
    },
  },
};
</script>

<style lang="scss">
.tag {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  &__head {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 35px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    &-wrap {
      max-width: 65%;
    }
  }

  &__text {
    margin: 0;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }

  &__title {
    margin: 30px 0 0;
    font-size: 28px;
    text-align: center;
  }

  &__link {
    color: inherit;
    display: inline-block;
    cursor: pointer;
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__left-col {
    display: flex;
    flex-direction: column;
    width: 28%;
    margin-right: 35px;
  }

  &__right-col {
    width: 65%;
    display: flex;
    flex-direction: column;
  }

  &__tabs {
    width: 100%;
  }

  &__tab-icon {
    margin-right: 15px;
  }

}
</style>
