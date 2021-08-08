<template>
  <Page id="home">
    <div id="subpage-container">
      <div id="title-container">
        <img id="title" src="~@/assets/images/logo.png" alt="">
      </div>
      <div id="content-container">
        <router-link to="/menu">
          <div id="coin"></div>
        </router-link>
      </div>
    </div>
    <img id="botan-animation" src="~@/assets/images/gif/ciclo-completo.gif" alt="">
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
#title-container {
  position: relative;
  z-index: 5;
}

#botan-animation {
  pointer-events: none;
  position: absolute;
  width: 100%;
  max-width: 320px;
  object-fit: scale-down;
  object-position: bottom;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 15%;
}

#subpage-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#title {
  width: 100%;
  object-fit: scale-down;
  padding-bottom: 5vh;
}

#content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25vh;
  position: relative;
  z-index: 5;
}

#coin {
  background-image: url("~@/assets/images/home_coin.png");
  width: 127px;
  height: 127px;
}

#coin:hover, #coin:active {
  background-image: url("~@/assets/images/gif/coin.gif");
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
