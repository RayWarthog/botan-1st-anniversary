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
          lang: null,
          message_jp: record.Translation
        }
        const jpCharacters = message.message.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)
        if (jpCharacters !== null) {
          message.lang = 'ja'
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
      messages: messages
    }
  }
}
</script>
