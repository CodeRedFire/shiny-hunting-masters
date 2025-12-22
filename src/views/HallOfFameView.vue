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
  <section style="text-align: center; padding-top: 40px; min-height: 48vh;">
    <span style="font-size: 3em;">{{  t("hof.waiting_members") }}</span>
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  height: 220px;
}

</style>
