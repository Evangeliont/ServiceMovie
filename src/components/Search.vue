<template>
  <form
    class="search-form"
    @submit.prevent="searchStore.getMovies(searchMovie)"
  >
    <input
      class="search-input"
      type="text"
      placeholder="Поиск фильмов"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div class="search-find-list" v-else>
    <Movie
      v-for="movie of searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :is-Search="true"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";
import { useSearchMovies } from "../stores/SearchStore";

const searchStore = useSearchMovies();

const searchMovie = ref("");
</script>
<style>
.search-form {
  max-width: 900px;
  width: 100%;
}

.search-input::placeholder {
  font-size: 18px;
  line-height: 1.5;
  color: #8f8f8f;
}

.search-input {
  outline: 0;
  border: 1px solid #e7e7e7;
  font-size: 18px;
  line-height: 1.5;
  color: #303030;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.search-input:focus {
  outline: 1px solid #0066ff;
}

.search-find-list {
  margin-bottom: 100px;
}
</style>
