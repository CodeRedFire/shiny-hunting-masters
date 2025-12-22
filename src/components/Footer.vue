<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div style="margin-bottom: 8px;">
      <a href="https://discord.gg/WeUsqyez4B" style="margin-right: 12px;"
         data-goatcounter-click="discord.gg"
         data-goatcounter-referrer="discord"
      >Discord</a>
      <a href="https://www.instagram.com/code_redfire/" style="margin-right: 12px;"
         data-goatcounter-click="instagram.com"
         data-goatcounter-referrer="instagram"
      >Instagram</a>
      <a href="https://www.youtube.com/@ShinyHuntingMasters" style="margin-right: 12px;"
         data-goatcounter-click="youtube.com"
         data-goatcounter-referrer="youtube"
      >Youtube</a>
    </div>
    <div>{{t("footer.pkmn1")}}</div>
    <div>{{t("footer.pkmn2")}}</div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #202020;
  padding: 28px 1em 40px;
}
.footer > div {
  font-weight: 200;
  font-size: 0.9em;
  opacity: 0.9;
}
a {
  color: #f9f9f9;
}
</style>
