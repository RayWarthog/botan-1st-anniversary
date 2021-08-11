<template>
  <Page id="messages" title_src="gif/messages.gif" title_alt="Messages" back_link="/menu" back_btn_type="3" sky_bg large_title>
    <div id="messages-container">
      <template v-for="message in messages" :key="message.idx">
        <Message :message="message"/>
      </template>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Message from '@/components/Message.vue'
import MessagesCSV from '@/assets/messages.csv'

import Masonry from 'masonry-layout'

import $ from 'jquery'
import 'magnific-popup/dist/jquery.magnific-popup'

const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
countries.registerLocale(require('i18n-iso-countries/langs/ja.json'))

export default {
  components: {
    Page,
    Message
  },
  data: () => {
    const messages = []
    MessagesCSV.map(
      (record, idx) => {
        const message = {
          idx: idx,
          nickname: record.Nickname ?? 'Anonymous',
          country_name: null,
          country_code: null,
          pfp: record.pfp ? require('@/assets/images/pfp/thumb/' + record.pfp) : null,
          fanarts: record.Illust ? require('@/assets/images/fanarts/' + record.Illust) : null,
          fanarts_small: record.Illust ? require('@/assets/images/fanarts/small/' + record.Illust) : null,
          original_credit: record.original_credit ?? null,
          message: record.Original_Message,
          message_jp: record.Translation
        }
        if (record.Country) {
          const country = record.Country.replace('-', ' ')
          const countryCode = countries.getAlpha2Code(country, 'en')
          if (countryCode) {
            message.country_code = countryCode.toLowerCase()
            message.country_name = countries.getName(countryCode, 'en') + ' / ' + countries.getName(countryCode, 'ja')
          }
        }
        messages.push(message)
      }
    )
    return {
      messages: messages,
      is_scrolling: false,
      to_refresh_layout: false
    }
  },
  methods: {
    refreshMasonry: function () {
      setTimeout(() => {
        this.masonry.layout()
      }, 150)
    },
    checkIsScrolling () {
      this.is_scrolling = true
      if (this.timer !== null) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.is_scrolling = false
      }, 150)
    },
    initMasonry () {
      this.masonry = new Masonry(
        document.querySelector('#messages-container'),
        {
          itemSelector: '.message:not([style*="display: none"])',
          columnWidth: '.message'
        }
      )
      document.querySelectorAll('.message .media img').forEach(item => {
        item.addEventListener('load', (e) => {
          this.to_refresh_layout = true
        })
      })
    },
    initMagnificPopup () {
      $('.message-image').magnificPopup({
        type: 'image',
        // gallery: {
        //   enabled: true
        // },
        image: {
          titleSrc: function (item) {
            let caption = item.el.attr('author')
            if (typeof item.el.attr('country_code') !== 'undefined') {
              caption = ' <span class="flag-icon flag-icon-' + item.el.attr('country_code') + '"></span> ' + caption
            }
            caption = '<p>' + caption + '</p>'
            if (typeof item.el.attr('original_credit') !== 'undefined') {
              caption = '<small>' + item.el.attr('original_credit') + '</small>' + caption
            }
            if (typeof item.el.attr('message') !== 'undefined') {
              caption = caption + '<p>' + item.el.attr('message') + '</p>'
            }
            if (typeof item.el.attr('message_jp') !== 'undefined') {
              caption = caption + '<p>' + item.el.attr('message_jp') + '</p>'
            }
            return caption
          }
        }
      })
    }
  },
  watch: {
    to_refresh_layout: function () {
      if (!this.to_refresh_layout) {
        return
      }
      if (this.is_scrolling) {
        return
      }
      this.to_refresh_layout = false
      this.$nextTick(() => {
        this.refreshMasonry()
      })
    },
    is_scrolling: function () {
      if (!this.is_scrolling && this.to_refresh_layout) {
        this.to_refresh_layout = false
        this.$nextTick(() => {
          this.refreshMasonry()
        })
      }
    }
  },
  mounted () {
    this.timer = null
    window.addEventListener('scroll', this.checkIsScrolling)
    this.$nextTick(() => {
      this.initMagnificPopup()
      this.initMasonry()
    })
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.checkIsScrolling)
  }
}
</script>

<style>
.message {
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width:801px)  {
  .message {
    width: calc(50% - 2rem);
    margin: 1rem;
  }
  .message.has_image {
    width: calc(100% - 2rem);
  }
}
@media (min-width:1281px) {
  .message {
    width: calc(33% - 2rem);
  }
  .message.has_image {
    width: calc(66% - 2rem);
  }
}
</style>
<style src="magnific-popup/dist/magnific-popup.css"></style>
