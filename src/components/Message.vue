<template>
    <div class="message" v-bind:class="{
      has_image: (message.fanarts) ? true : false
    }">
      <div class="outer-wrapper-2">
        <div class="outer-wrapper-1">
          <div class="message-container">
            <div class="sender">
              <div class="avatar">
                <img :src="message.pfp" alt="Avatar">
                <span class="flag-icon" v-if="message.country_code" v-bind:class="'flag-icon-' + message.country_code" :title="message.country_name" :alt="message.country_name"></span>
              </div>
              <div class="name">
                {{ message.nickname }}
              </div>
            </div>
            <div class="message-content">
              <div class="message-text">
                <p :lang="(message.lang) ? message.lang : false">
                  {{ message.message }}
                </p>
              </div>
              <div class="message-text-jp" v-if="message.message_jp">
                <p>
                  {{ message.message_jp }}
                </p>
              </div>
              <div class="media" v-if="message.fanarts">
                <div class="media-inner-wrapper">
                  <a class="message-image" :href="message.fanarts" :author="message.nickname" :message="message.message" :message_jp="message.message_jp" :country_code="message.country_code" :country_name="message.country_name" :original_credit="message.original_credit">
                    <img loading="lazy"
                    :src="message.fanarts_small"
                    alt="Fanart">
                  </a>
                  <div v-if="message.original_credit">{{ message.original_credit }}</div>
                </div>
                <!-- {{ message.fanarts }} -->
              </div>
            </div>
          </div>
        </div>
        <div class="white-box white-box-1"></div>
        <div class="white-box white-box-2"></div>
        <div class="white-box white-box-3"></div>
        <div class="white-box white-box-4"></div>
      </div>
    </div>
</template>

<script>
import 'flag-icon-css/css/flag-icon.css'
export default {
  name: 'Message',
  props: {
    message: Object
  }
}
</script>

<style scoped>
.message {
  position: relative;
}

.white-box {
  position: absolute;
  top: 0;
  width: 3%;
  max-width: 40px;
  height: 100%;
  background-color: white;
  z-index: 1;
}

.white-box-1 {
  left: 5%;
}

.white-box-2 {
  left: 14%;
}

.white-box-3 {
  left: 19%;
}

.white-box-4 {
  left: 24%;
}

.outer-wrapper-2 {
  background-color: #201E1E;
  padding: 10px;
  position: relative;
}

.outer-wrapper-1 {
  padding: 10px;
  background-color: #76C04E;
  position: relative;
  z-index: 2;
}

.message-container {
  padding: 15px;
  background-color: #76C04E;
  font-family: 'Litebulb 8-bit', 'Dela Gothic One', 'Noto Sans TC', 'Press Start 2P', cursive;
  border-style: solid;
  border-color: #201E1E;
  border-width: 10px;
}

.avatar img {
  width: 100px;
}

.message-content p {
  font-size: 1.5rem;
  white-space: pre-wrap;
  text-align: justify;
}

.message-text-jp p {
  font-family: 'Dela Gothic One', cursive;
}

.sender {
  display: flex;
  align-items: center;
}

.avatar {
  position: relative;
  display: inline-block;
  line-height: 0;
}

.flag-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  box-shadow: 0px 0px 5px;
}

.name {
  margin-left: 15px;
  font-size: 2rem;
  word-break: break-word;
  hyphens: auto;
}

.media {
  display: flex;
  justify-content: center;
}

.media img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

@media (min-width:801px)  {
  .outer-wrapper-2 {
    padding: 20px;
  }

  .outer-wrapper-1 {
    padding: 15px;
  }
}

@media (min-width:1281px) {
  .outer-wrapper-2 {
    padding: 30px;
  }

  .outer-wrapper-1 {
    padding: 15px;
  }
}
</style>
