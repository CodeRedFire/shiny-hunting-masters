<script setup lang="ts">

import Logo from "../components/Logo.vue";
</script>

<template>
  <section class="logo">
    <Logo></Logo>
  </section>
  <section class="titre">
    <h2>Devenez le maître de shasse de Kanto !</h2>
  </section>
  <section class="texte">
    <p>
      Dans cet évènement unique durant sur tout 2026, mettez au défi vos connaissances et compétences de Shiny Hunter au
      travers de 2 épreuves.
    </p>
    <ul>
      <li><b>Le Tour des Arènes</b></li>
      <li><b>Le Concours de Shasse</b></li>
    </ul>
  </section>
  <section class="texte1">
    <h3>Tour des arènes</h3>
    <div class="split">
      <div>
        <p>
          Partez pour un tour complet des arènes et affrontez chaque Champion selon ses propres règles :
        </p>
        <p>👉 Pour chaque arène, vous devrez obtenir au moins un Pokémon shiny du type du Champion avant de pouvoir
          décrocher son badge.</p>
        <p>🔥 8 arènes.</p>
        <p>✨ 8 types.</p>
        <p>🏅 8 badges.</p>
        <p>
          Mais le défi ne s’arrête pas là…</p>
        <p>
          Une fois les badges en poche, direction la Ligue Pokémon. Les meilleurs dresseurs vous y attendent, et une
          seule façon de les défier :
          shiny hunting obligatoire, toujours en respectant le type de chaque membre de la Ligue.</p>

        <p>
          Ce défi mettra à l’épreuve votre patience, votre détermination et votre chance. Chaque shiny obtenu est une
          victoire,
          chaque badge une consécration, et chaque combat un pas de plus vers la légende.</p>
      </div>
      <div>
        <img src="/public/map.png" alt="Carte de Kanto" style="width: 100%;"/>
      </div>
    </div>
  </section>
  <section class="texte2">
    <h3>Concours de Shasse</h3>
    <div class="split">
      <div>
        <p>Pendant toute la durée de l’événement, un seul objectif :</p>
        <p>👉 capturer un maximum de Pokémon shiny et accumuler le plus de points possible.</p>

        <p>Chaque rencontre peut tout changer, chaque étincelle compte 💎</p>

        <h4>🧮 SYSTÈME DE POINTS</h4>

        <ul>
        <li>⭐ 1 point pour chaque Pokémon shiny capturé</li>

        <li>🌟 3 points pour chaque Pokémon shiny légendaire</li>

        <li>⚡ Multiplicateur x2 pour tout shiny correspondant au type de l’arène en cours</li>
        </ul>

        <p>Stratégie, endurance et chance seront vos meilleures armes.
          Faut-il sécuriser des points rapidement ou viser le gros coup avec un légendaire ? À vous de choisir.</p>

        <p>🏆 À la fin du concours, un seul dresseur pourra se vanter d’avoir dominé la shasse et inscrit son nom au
          sommet du classement.</p>

        <p>✨ Préparez vos Poké Balls, affûtez votre RNG et lancez-vous :
          <b>la chasse aux shiny est ouverte</b>.</p>
      </div>
      <div style="display: flex; flex-direction: row;gap: 20px; flex-wrap: wrap;">
        <h4 style="width: 100%;">Rubans récompenses</h4>
        <div style="text-align: center">
          <img src="/public/ruban%20bronze.png" alt="Ruban bronze"/>
          <div style="text-align: center;width: 100%;">Bronze - 25 points</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20argent.png" alt="Ruban argent"/>
          <div style="text-align: center;width: 100%;">Argent - 50 points</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20or.png" alt="Ruban or"/>
          <div style="text-align: center;width: 100%;">Or - 75 points</div>
        </div>
        <div style="text-align: center">
          <img src="/public/ruban%20diamant.png" alt="Ruban diamant"/>
          <div style="text-align: center;width: 100%;">Diamant - 100 points</div>
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
