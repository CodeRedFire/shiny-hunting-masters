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
    <router-link to="/shiny-hunting-masters/en">{{ t('menu.rules') }}</router-link>
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
  background-color: rgba(0,0,0,0.5);
  font-size: 1.2em;
}
a {
  color: #f9f9f9;
  font-weight: 300;
  text-decoration-color: #f9f9f9;
}
</style>
