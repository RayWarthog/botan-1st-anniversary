import { reactive } from 'vue'

const store = {
  state: reactive({
    lang: 'en'
  }),

  toggleLang () {
    if (this.state.lang === 'ja') {
      this.state.lang = 'en'
    } else {
      this.state.lang = 'ja'
    }
  }
}

export default store
