<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const { t, locale, availableLocales,  } = useI18n()


const changeLocale = (event: Event) => {
  locale.value = (event.target as HTMLSelectElement).value
}

</script>

<template>
  <nav class="menu">
    <router-link to="/shiny-hunting-masters">{{ t('menu.home') }}</router-link>
    <router-link to="/shiny-hunting-masters/rules">{{ t('menu.rules') }}</router-link>
    <router-link to="/shiny-hunting-masters/hall-of-fame">{{ t('menu.hof') }}</router-link>
    <a href="https://discord.gg/WeUsqyez4B"
       data-goatcounter-click="discord.gg"
       data-goatcounter-referrer="discord"
    >Discord</a>
    <a href="https://www.instagram.com/code_redfire/"
       data-goatcounter-click="instagram.com"
       data-goatcounter-referrer="instagram"
    >Instagram</a>
    <a href="https://www.youtube.com/@ShinyHuntingMasters"
       data-goatcounter-click="youtube.com"
       data-goatcounter-referrer="youtube"
    >Youtube</a>
    <select :value="locale" @change="changeLocale">
      <option
          v-for="l in availableLocales"
          :key="l"
          :value="l"
      >
        {{ t('menu.' + l) }}
      </option>
    </select>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  padding: 12px 0px;
  background-color: rgba(0,0,0,0.75);
  font-size: 1em;
}
a {
  color: #f9f9f9;
  font-weight: 300;
  text-decoration-color: #f9f9f9;
}
select {
  background-color: transparent;
  color: #f9f9f9;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
}
option {
  background-color: rgba(0,0,0,0.75);

  font-size: 1em;
  font-family: "Nunito", sans-serif;
}
</style>
