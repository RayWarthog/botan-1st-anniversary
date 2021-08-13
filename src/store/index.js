import { reactive } from 'vue'

const userLanguages = window.navigator.languages || [window.navigator.language || window.navigator.userLanguage]
const userLangPref = localStorage.getItem('lang')
let defaultLangauge = 'en'

if (userLangPref === 'ja' || userLangPref === 'en') {
  defaultLangauge = userLangPref
} else {
  if (userLanguages.includes('ja')) {
    defaultLangauge = 'ja'
  }
}

const store = {
  state: reactive({
    lang: defaultLangauge
  }),

  toggleLang (lang = null) {
    if (lang) {
      this.state.lang = lang
    } else if (this.state.lang === 'ja') {
      this.state.lang = 'en'
    } else {
      this.state.lang = 'ja'
    }
    localStorage.setItem('lang', this.state.lang)
  }
}

export default store
