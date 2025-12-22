<script setup lang="ts">

import Logo from "../components/Logo.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
</script>

<template>
  <section class="logo">
    <Logo></Logo>
  </section>
  <section style="text-align: center; padding-top: 40px; min-height: 48vh;">
    <span style="font-size: 3em;">{{  t("hof.waiting_members") }}</span>
  </section>
  <script data-goatcounter="https://shinyhuntingmasters.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  height: 220px;
}

</style>
