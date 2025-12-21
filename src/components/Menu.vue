<script setup lang="ts">

</script>

<template>
  <nav class="menu">
    <router-link to="/shiny-hunting-masters">Accueil</router-link>
    <router-link to="/shiny-hunting-masters/en">Règles</router-link>
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
