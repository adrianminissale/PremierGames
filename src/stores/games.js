import { defineStore } from "pinia";
import games from "/src/mock/games";

export const useGamesStore = defineStore("gamesStore", {
  state: () => ({
    games,
    search: "",
  }),
  actions: {
    setSearch(search) {
      this.search = search;
    },
  },
});
