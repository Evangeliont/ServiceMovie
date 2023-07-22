<template>
  <div class="movie">
    <div class="movie-wrapper-img">
      <img :src="`${movie.poster}`" :alt="movie.name" class="movie-img" />
    </div>
    <div class="movie-content">
      <h3 class="movie-name">
        {{ movie.name }}
        <span class="movie-name_mod">{{ movie.year }}</span>
      </h3>
      <span class="movie-overview">
        {{ movie.description }}
      </span>
      <div class="movie-button" v-if="!isSearch">
        <button
          class="btn movies-btn-watcher"
          @click="movieStore.toggleWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Не просмотрено</span>
          <span v-else>Просмотрено</span>
        </button>
        <button
          class="btn movie-btn-delete"
          @click="movieStore.deleteMovie(movie.id)"
        >
          Удалить
        </button>
      </div>
      <div class="movie-button" v-else>
        <button class="btn btn-add" @click="searchStore.addToUserMovies(movie)">
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMovieStore } from "../stores/MovieStore";
import { useSearchMovies } from "../stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchMovies();

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<style>
@import "../assets/scss/components/movie.scss";
</style>
