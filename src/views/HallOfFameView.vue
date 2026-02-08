<script setup lang="ts">

import Logo from "../components/Logo.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()

import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.src = '//gc.zgo.at/count.js'
  script.dataset.goatcounter = 'https://shinyhuntingmasters.goatcounter.com/count'
  script.dataset.goatcounterSettings = JSON.stringify({
    path: '/shiny-hunting-masters/hall-of-fame'
  })

  script.id = 'goatcounter-script'
  document.head.appendChild(script)
})

onBeforeUnmount(() => {
  const script = document.getElementById('goatcounter-script')
  if (script) script.remove()
})
</script>

<template>
  <section class="logo">
    <Logo></Logo>
  </section>
  <section style="min-height: 48vh; padding: 40px 20% 0px 20%;">
    <h2>{{  t("hof.badge") }}</h2>
    <h3>{{  t("hof.badge_roche") }}</h3>
    <h3>{{  t("hof.badge_cascade") }}</h3>
    <ul>
      <li><b>Redfire</b> : 1/3</li>
    </ul>
    <h3>{{  t("hof.badge_foudre") }}</h3>
    <h3>{{  t("hof.badge_prisme") }}</h3>
    <h3>{{  t("hof.badge_ame") }}</h3>
    <h3>{{  t("hof.badge_marais") }}</h3>
    <h3>{{  t("hof.badge_volcan") }}</h3>
    <h3>{{  t("hof.badge_terre") }}</h3>
    <hr/>
    <h2>{{  t("hof.contest") }}</h2>
    <ul>
      <li><b>Redfire</b> : 7</li>
      <li><b>Lollix_D_Nenzo</b> : 4</li>
    </ul>
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  height: 220px;
}

section {
  background-color: #1a2344;
}

h2 {
  margin-left: 40px;
}

h3 {
  margin-left: 80px;
}

</style>
