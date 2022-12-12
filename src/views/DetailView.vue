<script setup lang="ts">
import { useGamesStore } from "@/stores/games";

const gamesStore = useGamesStore();
const game: { game_background: string; title: string; content: string } =
  gamesStore.games[window.location.pathname.substring(1)];
</script>

<template>
  <div
    class="detail"
    :style="{ backgroundImage: 'url(' + game.game_background + ')' }"
  >
    <div class="detail-content">
      <h1>{{ game.title }}</h1>
      <div v-html="game.content" />
    </div>
  </div>
</template>

<style scoped>
.detail {
  flex: 1;
  background-size: cover;
  background-position: top center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detail-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  color: #fff;
  max-width: 50%;
  margin: 0 auto;
}
</style>
