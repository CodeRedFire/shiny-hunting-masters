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
    path: '/shiny-hunting-masters/rules'
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
  <section style="display: flex; justify-content: center; margin-bottom: 60px;">
    <div style="width: 60%; min-width: 600px;">
      <h1>{{ t("rules.titre") }}</h1>
      <ul>
        <li>{{ t("rules.r1") }}</li>
        <li>{{ t("rules.r2") }}</li>
        <li>{{ t("rules.r3") }}</li>
      </ul>

      <h2>{{ t("rules.submission") }}</h2>
      <p>{{ t("rules.s1") }}</p>
      <h3>Instagram</h3>
      <p><a href="https://www.instagram.com/code_redfire/">
        {{ t("rules.s2") }} <b>@code_redfire</b> {{ t("rules.s3") }} <b>#SHMKanto</b></a></p>
      <h3>Discord</h3>
      <p><a href="https://discord.gg/WeUsqyez4B">
        {{ t("rules.s4") }} <b>#shiny-hunting-masters-kanto</b>
      </a></p>

    </div>
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  height: 220px;
}

a {
  color: #d6ae57;
}
</style>
