<template>
  <Page id="Credits" title_src="credits.png" title_alt="Credits" title_alt_jp="クレジット" back_link="/menu" back_btn_type="4" sky_bg>
    <div id="credits-container">
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? 'プロジェクト主催 / 管理' : 'Project Organizer / Supervisors'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Rachel Banana</li>
            <li>Broom</li>
            <li>Piniko</li>
            <li>Michei</li>
            <li>Crescent890</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? 'ウェブサイト / 管理' : 'Website'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Warthog</li>
            <li>SayoHyou</li>
            <li>Poppysicle</li>
            <li>Lkes</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? 'アニメション・動画編集' : 'Animation and Video Edition'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Mishima</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? 'アニメーションのイラスト' : 'Animation Art'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Forever9Nine</li>
            <li>Kawaxya (Aldy)</li>
            <li>Tatane</li>
            <li>SayoHyou</li>
            <li>Michei</li>
            <li>蒼泉 (Izumi)</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? '着せ替えアート' : 'Picrew Art'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Forever9Nine</li>
            <li>Kawaxya (Aldy)</li>
            <li>Tatane</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? '翻訳' : 'Translators'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>木狐</li>
            <li>TumbleweedPretzel_Jr</li>
            <li>[SSRB] faffy</li>
            <li>Theldeon</li>
            <li>mugichos</li>
            <li>Faldi-Tan</li>
            <li>Vanilla</li>
            <li>kurapan</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? '他' : 'Others'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>Misamisatoto</li>
            <li>蒼泉 (Izumi)</li>
            <li>デイーモン (Daemon)</li>
            <li>Hosu</li>
            <li>PeachHeadz</li>
            <li>Gokiburi</li>
            <li>Carroto</li>
            <li>Loli Potato</li>
            <li>JarJarThinks</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">
          {{state.lang == 'ja' ? '音楽・効果音' : 'Music & SFX'}}
        </div>
        <div class="credit-content">
          <ul>
            <li>DOVA-SYNDROME</li>
            <li><a href="https://youtu.be/kdEblFC1VU0" target="_blank">Link 1</a></li>
            <li><a href="https://youtu.be/p1O7tSN5_Co" target="_blank">Link 2</a></li>
            <li><a href="https://youtu.be/TArfBA0Ywxo" target="_blank">Link 3</a></li>
            <li><a href="https://dova-s.jp/se/play408.html" target="_blank">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="disclaimer">
      <p v-if="state.lang == 'ja'">
        当ウェブサイトはホロライブのファンによって運営されている非公式ファンサイトです。
        カバー株式会社およびホロライブプロダクションとは一切関係ありません。
      </p>
      <p v-else>
        This is strictly a fan site. We are not related to Cover Corp. nor Hololive in any way.
      </p>
    </div>
    <div id="botan-animation-container">
      <div id="text-bubble">
        <p>
          {{state.lang == 'ja' ? '特別な感謝 このプロジェックとをサポートしてくれた皆さんへ' : 'Special Thanks to everyone who supports this project'}}
        </p>
      </div>
      <img id="botan-animation" src="~@/assets/images/gif/botan_eat.gif" alt="Botan eating">
    </div>
    <img id="ground" src="~@/assets/images/ground.png" alt="ground">
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import store from '@/store'

export default {
  components: {
    Page
  },
  data: () => {
    return {
      state: store.state
    }
  }
}
</script>

<style>
#credits-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

.credit-section {
  font-family: 'Litebulb 8-bit', 'Dela Gothic One', cursive;
  color: #5EBC34;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

.credit-section a {
  /* text-decoration: none; */
  color: inherit;
}

.credit-title {
  font-size: 2.25rem;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}

.credit-section ul {
  list-style-type: none;
  padding-left: 0;
}

#botan-animation-container {
  position: absolute;
  right: 0;
  bottom: 2%;
  display: flex;
  align-items: center;
  z-index: 10;
}

#text-bubble {
  background-color: white;
  width: 150px;
  font-family: 'Litebulb 8-bit', 'Dela Gothic One', cursive;
  position: relative;
  padding: 1px;
  text-align: center;
  font-size: 1rem;
  border-radius: 15px;
}

#text-bubble:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid white;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  border-bottom: 10px solid transparent;
  right: -20px;
  top: 15px;
}

#botan-animation {
  pointer-events: none;
  width: 100%;
  max-width: 150px;
  object-fit: scale-down;
  object-position: bottom;
  margin-left: auto;
}

#ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: fill;
  object-position: bottom;
  z-index: 5;
  max-height: 30vh;
}

.disclaimer {
  padding: 5px;
  padding-bottom: 30vh;
  font-family: 'Litebulb 8-bit', 'Dela Gothic One', cursive;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  text-align: justify;
  text-align-last: center;
}

@media (orientation: portrait) and (min-width: 768px) {
  #botan-animation {
    max-width: 400px;
  }
  #text-bubble {
    width: 200px;
  }
}

@media (min-width: 1024px) {
  #botan-animation {
    max-width: 400px;
  }
  #text-bubble {
    width: 200px;
  }
  .credit-section {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
