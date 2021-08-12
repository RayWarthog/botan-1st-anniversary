<template>
  <Page id="animation" back_link="/menu" back_btn_type="3">
    <div class="wrapper">
      <div id="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/5_AkrDSMs2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div id="box-shadow"></div>
    <img id="botan-animation" src="~@/assets/images/gif/animation.gif" alt="">
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  components: {
    Page
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1280px;
}

#video-container {
  position: relative;
  z-index: 5;

  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

#video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#botan-animation {
  pointer-events: none;
  position: absolute;
  width: 100%;
  max-width: 200px;
  object-fit: scale-down;
  object-position: bottom;
  margin-left: auto;
  right: 0;
  bottom: 2%;
}

#box-shadow {
  content: " ";
  width: 100%;
  position: fixed;
  bottom: 14%;
  transform: scale(1.1);
  box-shadow: 0px 0px 32px 6px #000000;
}

@media (orientation: landscape) {
  .wrapper {
    margin-left: 2vw;
    max-width: 60%;
  }

  #box-shadow {
    margin-left: 2vw;
    width: 60%;
  }
}

@media (orientation: landscape) and (min-width: 640px) {
  .wrapper {
    max-width: 60%;
  }

  #box-shadow {
    width: 60%;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    max-width: 1280px;
  }

  #box-shadow {
    max-width: 1280px;
  }
}

@media (orientation: portrait) and (min-width: 768px) {
  #botan-animation {
    max-width: 500px;
  }
}

@media (min-width: 1024px) {
  #botan-animation {
    max-width: 500px;
  }
}
</style>
