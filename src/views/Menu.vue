<template>
  <Page id="menu" title_src="menu.png" title_alt="Menu" back_link="/" back_btn_type="1">
    <div id="links">
      <router-link to="/animation">animation</router-link>
      <router-link to="/messages">messages</router-link>
      <a href="https://picrew.me/secret_image_maker/pGwu64Vbgybd9W0T" target="_blank">ssrb picrew</a>
      <router-link to="/credits">credits</router-link>
    </div>
    <img id="botan-animation" src="~@/assets/images/gif/botan_pet.gif" alt="">
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
#menu {
  font-family: 'Litebulb 8-bit';
  font-size: 2rem;
  line-height: 1.5;
  color: #5EBC34;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
}

#menu a {
  text-decoration: none;
  color: inherit;
}

#menu a {
  position: relative;
}

#menu a:hover:after {
  content: " ";
  background-image: url('~@/assets/images/ooba_tatane.png');
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  left: -20%;
  top: 30%;
  width: 16px;
  height: 16px;
}

#links {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
}

#botan-animation {
  pointer-events: none;
  position: absolute;
  width: 100%;
  max-width: 160px;
  object-fit: scale-down;
  object-position: bottom;
  right: 0;
  margin-left: auto;
  bottom: 2%;
}

@media (orientation: portrait) and (min-width: 768px) {
  #menu {
    font-size: 4rem;
  }
  #botan-animation {
    max-width: 320px;
  }
  #menu a:hover:after {
    left: -15%;
    top: 40%;
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 1024px) {
  #menu {
    font-size: 4rem;
  }
  #botan-animation {
    max-width: 320px;
  }
  #menu a:hover:after {
    left: -15%;
    top: 40%;
    width: 32px;
    height: 32px;
  }
}
</style>
