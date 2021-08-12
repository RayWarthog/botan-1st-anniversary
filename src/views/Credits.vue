<template>
  <Page id="Credits" title_src="credits.png" title_alt="Credits" back_link="/menu" back_btn_type="2">
    <div id="credits-container">
      <div class="credit-section">
        <div class="credit-title">Project Organizer / Supervisors</div>
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
        <div class="credit-title">Website</div>
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
        <div class="credit-title">Animation and Video Edition</div>
        <div class="credit-content">
          <ul>
            <li>Mishima</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">Animation Art</div>
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
        <div class="credit-title">Picrew Art</div>
        <div class="credit-content">
          <ul>
            <li>Forever9Nine</li>
            <li>Kawaxya (Aldy)</li>
            <li>Tatane</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">Translators</div>
        <div class="credit-content">
          <ul>
            <li>木狐</li>
            <li>TumbleweedPretzel_Jr</li>
            <li>[SSRB] faffy</li>
            <li>Theldeon</li>
            <li>mugichos</li>
            <li>Faldi-Tan</li>
            <li>Vanilla</li>
          </ul>
        </div>
      </div>
      <div class="credit-section">
        <div class="credit-title">Others</div>
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
        <div class="credit-title">Music & SFX</div>
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
      <div class="spacer"></div>
    </div>
    <div id="botan-animation-container">
      <div id="text-bubble">
        <p>
          Special Thanks
          To everyone who supports this project
        </p>
      </div>
      <img id="botan-animation" src="~@/assets/images/gif/botan_eat.gif" alt="Botan eating">
    </div>
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

<style>
#credits-container {
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

.credit-section {
  font-family: 'Litebulb 8-bit', 'Noto Sans TC', cursive;
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

.spacer {
  height: 150px;
  width: 300px;
}

#botan-animation-container {
  position: absolute;
  right: 0;
  bottom: 2%;
  display: flex;
  align-items: center;
}

#text-bubble {
  background-color: white;
  width: 150px;
  font-family: 'Litebulb 8-bit', 'Noto Sans TC', cursive;
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
  z-index: 1;
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
  .spacer {
    height: 0;
    width: 0;
  }
}
</style>
