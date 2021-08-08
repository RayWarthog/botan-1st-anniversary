<template>
  <div class="page-container" v-bind:class="{
    sky_bg: sky_bg ? true : false
  }">
    <div class="top-bar">
      <div class="title-container">
        <template v-if="title_src">
          <img class="title" :src="require('@/assets/images/' + title_src)" alt="">
        </template>
      </div>
      <div class="back-btn" v-if="back_link && back_btn_type">
        <router-link :to=back_link>
          <div class="back-btn-img" :class="'back-btn-' + back_btn_type"></div>
        </router-link>
      </div>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title_src: String,
    back_link: String,
    back_btn_type: String
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  object-fit: scale-down;
  padding-bottom: 5px;
  margin-top: 5px;
}

.content-container {
  flex: 1;
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
  background-image: url('~@/assets/images/back/back1.png');
}
.back-btn-img.back-btn-1:hover, .back-btn-img.back-btn-1:active {
  background-image: url("~@/assets/images/back/back1.gif");
}

.back-btn-img.back-btn-2 {
  background-image: url('~@/assets/images/back/back2.png');
}
.back-btn-img.back-btn-2:hover, .back-btn-img.back-btn-2:active {
  background-image: url("~@/assets/images/back/back2.gif");
}

.back-btn-img.back-btn-3 {
  background-image: url('~@/assets/images/back/back3.png');
}
.back-btn-img.back-btn-3:hover, .back-btn-img.back-btn-3:active {
  background-image: url("~@/assets/images/back/back3.gif");
}

.back-btn-img.back-btn-4 {
  background-image: url('~@/assets/images/back/back4.png');
}
.back-btn-img.back-btn-4:hover, .back-btn-img.back-btn-4:active {
  background-image: url("~@/assets/images/back/back4.gif");
}

@media (min-width: 481px) {
  .top-bar {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .title-container {
    grid-column-start: 2;
  }
}
</style>
