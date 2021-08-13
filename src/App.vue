<template>
  <button id="lang-toggle" @click="toggleLang()">
    <div id="lang-toggle-ja" class="lang-option" v-bind:class="{
      selected: state.lang === 'ja'
    }">JP</div>
    <div class="lang-option" v-bind:class="{
      selected: state.lang === 'en'
    }">EN</div>
  </button>
  <router-view/>
</template>

<script>
import store from './store'

export default {
  data: function () {
    return {
      state: store.state
    }
  },
  methods: {
    toggleLang () {
      store.toggleLang()
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+TC:wght@700&family=Press+Start+2P&display=swap');
@font-face {
  font-family: 'Litebulb 8-bit';
  src: url('~@/assets/fonts/Litebulb-8-bit large.ttf');
}

#lang-toggle {
  position: absolute;
  font-family: 'Dela Gothic One';
  display: flex;
  background: transparent;
  border-style: none;
  cursor: pointer;
  color: #006B2B;
  font-size: 1rem;
  z-index: 99;
}

#lang-toggle-ja {
  padding-right: 5px;
}

.lang-option.selected {
  font-size: 1.2rem;
  text-shadow: 1px 1px;
}

</style>
