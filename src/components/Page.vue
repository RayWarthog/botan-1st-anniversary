<template>
  <div class="page-container" v-bind:class="{
    sky_bg: sky_bg ? true : false
  }">
    <div class="top-bar" v-bind:class="{
        large_title: large_title ? true : false
      }">
      <div class="title-container">
        <template v-if="title_src">
          <img class="title" :src="require('@/assets/images/' + state.lang + '/' + title_src)" :alt="(state.lang == 'ja') ? title_alt_jp : title_alt">
        </template>
      </div>
      <div class="back-btn" v-if="back_link && back_btn_type">
        <router-link :to=back_link>
          <div class="back-btn-img" :class="'back-btn-' + back_btn_type" :lang="state.lang"></div>
        </router-link>
      </div>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Page',
  props: {
    title_src: String,
    title_alt: String,
    title_alt_jp: String,
    back_link: String,
    back_btn_type: String,
    sky_bg: Boolean,
    large_title: Boolean
  },
  data: function () {
    return {
      state: store.state
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  object-fit: scale-down;
  padding-bottom: 5px;
  margin-top: 5px;
  pointer-events: none;
}

.title-container {
  padding-top: 1.25rem;
}

.content-container {
  flex: 1;
  width: 100%;
}

div.page-container {
  background-image: url('~@/assets/images/home_bg.png');
  background-size: cover;
  background-position: center;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  overflow: auto;
}

div.page-container.sky_bg {
  background-image: url('~@/assets/images/sky.png');
}

.top-bar {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.back-btn {
  margin-left: auto;
  margin-top: 5px;
  margin-right: 5px;
}

.back-btn-img {
  background-repeat: no-repeat;
  width: 56px;
  height: 70px;
  background-size: contain;
}

.back-btn-img.back-btn-1 {
  background-image: url('~@/assets/images/en/back/back1.png');
}
.back-btn-img.back-btn-1:hover, .back-btn-img.back-btn-1:active {
  background-image: url("~@/assets/images/en/back/back1.gif");
}

.back-btn-img.back-btn-1:lang(ja) {
  background-image: url('~@/assets/images/ja/back/back1.png');
}
.back-btn-img.back-btn-1:hover:lang(ja), .back-btn-img.back-btn-1:active:lang(ja) {
  background-image: url("~@/assets/images/ja/back/back1.gif");
}

.back-btn-img.back-btn-2 {
  background-image: url('~@/assets/images/en/back/back2.png');
}
.back-btn-img.back-btn-2:hover, .back-btn-img.back-btn-2:active {
  background-image: url("~@/assets/images/en/back/back2.gif");
}

.back-btn-img.back-btn-2:lang(ja) {
  background-image: url('~@/assets/images/ja/back/back2.png');
}
.back-btn-img.back-btn-2:hover:lang(ja), .back-btn-img.back-btn-2:active:lang(ja) {
  background-image: url("~@/assets/images/ja/back/back2.gif");
}

.back-btn-img.back-btn-3 {
  background-image: url('~@/assets/images/en/back/back3.png');
}
.back-btn-img.back-btn-3:hover, .back-btn-img.back-btn-3:active {
  background-image: url("~@/assets/images/en/back/back3.gif");
}

.back-btn-img.back-btn-3:lang(ja) {
  background-image: url('~@/assets/images/ja/back/back3.png');
}
.back-btn-img.back-btn-3:hover:lang(ja), .back-btn-img.back-btn-3:active:lang(ja) {
  background-image: url("~@/assets/images/ja/back/back3.gif");
}

.back-btn-img.back-btn-4 {
  background-image: url('~@/assets/images/en/back/back4.png');
}
.back-btn-img.back-btn-4:hover, .back-btn-img.back-btn-4:active {
  background-image: url("~@/assets/images/en/back/back4.gif");
}

.back-btn-img.back-btn-4:lang(ja) {
  background-image: url('~@/assets/images/ja/back/back4.png');
}
.back-btn-img.back-btn-4:hover:lang(ja), .back-btn-img.back-btn-4:active:lang(ja) {
  background-image: url("~@/assets/images/ja/back/back4.gif");
}

@media (min-width: 481px) {
  .top-bar {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .top-bar.large_title {
    grid-template-columns: 1fr 2fr 1fr;
  }

  .title-container {
    grid-column-start: 2;
    padding-top: inherit;
  }
}
</style>
