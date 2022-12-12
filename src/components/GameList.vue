<script lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useGamesStore } from "@/stores/games";

export default {
  setup() {
    const gamesStore = useGamesStore();
    const search = ref<String>(gamesStore.search);

    const filteredGames = computed<{ slug: String, id: Number, game_thumbnail: String }>(() => {
      let filter = search.value;
      gamesStore.setSearch(filter);
      if (!filter.length) {
        return gamesStore.games;
      }
      return Object.values(gamesStore.games).filter((game: { title: String }) =>
        game.title.toLowerCase().includes(filter.toLowerCase())
      );
    });
    return {
      search,
      filteredGames,
      RouterLink,
    };
  },
};
</script>

<template>
  <div class="filter">
    Game Filter
    <input type="text" v-model="search" />
  </div>
  <div class="games">
    <RouterLink
      v-for="game in filteredGames"
      :to="'/' + game.slug"
      :key="game.id"
      :style="{ backgroundImage: 'url(' + game.game_thumbnail + ')' }"
      class="game-item"
    >
    </RouterLink>
  </div>
</template>

<style scoped>
.games {
  display: flex;
  flex-wrap: wrap;
}
.game-item {
  margin: 0.5rem 0.5rem 0 0;
  height: 150px;
  width: 150px;
  background-size: cover;
  background-position: center;
}
.filter {
  margin-bottom: 1rem;
}
input {
  vertical-align: 3px;
  height: 30px;
  width: 200px;
}
</style>
