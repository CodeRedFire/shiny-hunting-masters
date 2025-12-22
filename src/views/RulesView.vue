<script setup lang="ts">

import Logo from "../components/Logo.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
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
  <script data-goatcounter="https://shinyhuntingmasters.goatcounter.com/count"
          data-goatcounter-settings='{"path": "/shiny-hunting-masters/rules"}'
          async src="//gc.zgo.at/count.js"></script>
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
