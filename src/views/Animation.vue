<template>
  <Page id="animation" back_link="/menu" back_btn_type="3">
    <div id="video-container">
      <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ということでマリンの新衣装、運営からギリギリOKを貰えた水着衣装でした！！！！！対戦ありがとうございます。声枯れが治ったらまた配信します！！<a href="https://twitter.com/hashtag/%E5%AE%9D%E9%90%98%E3%83%9E%E3%83%AA%E3%83%B3%E6%96%B0%E8%A1%A3%E8%A3%85%E3%81%8A%E6%8A%AB%E9%9C%B2%E7%9B%AE?src=hash&amp;ref_src=twsrc%5Etfw">#宝鐘マリン新衣装お披露目</a> <a href="https://t.co/wwl0Zsfrjk">pic.twitter.com/wwl0Zsfrjk</a></p>&mdash; 宝鐘マリン🏴‍☠️＠ホロライブ3期生 (@houshoumarine) <a href="https://twitter.com/houshoumarine/status/1420721855816605697?ref_src=twsrc%5Etfw">July 29, 2021</a></blockquote>
    </div>
    <img id="botan-animation" src="~@/assets/images/gif/animation.gif" alt="">
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  components: {
    Page
  },
  mounted () {
    const plugin = document.createElement('script')
    plugin.setAttribute(
      'src',
      'https://platform.twitter.com/widgets.js'
    )
    plugin.async = true
    plugin.setAttribute('charset', 'utf-8')
    plugin.id = 'twitter-script'
    document.head.appendChild(plugin)
  }
}
</script>

<style scoped>
#video-container {
  position: relative;
  z-index: 5;
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
