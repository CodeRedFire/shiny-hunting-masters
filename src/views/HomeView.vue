<script setup lang="ts">

import Logo from "../components/Logo.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
</script>

<template>
  <section class="logo">
    <Logo></Logo>
  </section>
  <section class="titre">
    <h2>{{ t("home.titre") }}</h2>
  </section>
  <section class="texte">
    <p>{{ t("home.s1p1") }}</p>
    <ul>
      <li><b>{{ t("home.s1p2") }}</b></li>
      <li><b>{{ t("home.s1p3") }}</b></li>
    </ul>
  </section>
  <section class="texte1">
    <h3>{{ t("home.s2p1") }}</h3>
    <div class="split">
      <div>
        <p>{{ t("home.s2p2") }}</p>
        <p>{{ t("home.s2p3") }}</p>
        <p>{{ t("home.s2p4") }}</p>
        <p>{{ t("home.s2p5") }}</p>
        <p>{{ t("home.s2p6") }}</p>
        <p>{{ t("home.s2p7") }}</p>
        <p>{{ t("home.s2p8") }}</p>
        <p>{{ t("home.s2p9") }}</p>
      </div>
      <div>
        <img src="/public/map.png" alt="Carte de Kanto" style="width: 100%;"/>
      </div>
    </div>
  </section>
  <section class="texte2">
    <h3>{{ t("home.s3p1")}}</h3>
    <div class="split">
      <div>
        <p>{{ t("home.s3p2")}}</p>
        <p>{{ t("home.s3p3")}}</p>
        <p>{{ t("home.s3p4")}}</p>

        <h4>{{ t("home.s3p5")}}</h4>

        <ul>
        <li>{{ t("home.s3p6")}}</li>
        <li>{{ t("home.s3p7")}}</li>
        <li>{{ t("home.s3p8")}}</li>
        </ul>

        <p>{{ t("home.s3p9")}}</p>
        <p>{{ t("home.s3p10")}}</p>
        <p>{{ t("home.s3p11")}}
          <b>{{ t("home.s3p12")}}</b></p>
      </div>
      <div style="display: flex; flex-direction: row;gap: 20px; flex-wrap: wrap;">
        <h4 style="width: 100%;">{{ t("home.s3p13")}}</h4>
        <div style="text-align: center">
          <img src="/public/ruban%20bronze.png" alt="Ruban bronze"/>
          <div style="text-align: center;width: 100%;">{{ t("home.s3p14")}}</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20argent.png" alt="Ruban argent"/>
          <div style="text-align: center;width: 100%;">{{ t("home.s3p15")}}</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20or.png" alt="Ruban or"/>
          <div style="text-align: center;width: 100%;">{{ t("home.s3p16")}}</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20diamant.png" alt="Ruban diamant"/>
          <div style="text-align: center;width: 100%;">{{ t("home.s3p17")}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
}

.titre {
  display: flex;
  justify-content: center;
}

.texte, .texte1, .texte2 {
  padding: 20px 40px;
}

.texte1 {
  background-color: rgb(3, 6, 39);
}

.texte2 {
  background-color: rgb(48, 53, 80);
}

h2 {
  font-size: 3em;
}

h3 {
  font-size: 2em;
}

.split {
  display: flex;
  gap: 40px;
}

.split div {
  width: calc(50% - 20px);
}
</style>
