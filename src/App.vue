<template>
  <header class="header">
    <h1 class="header-title">Мои любимые фильмы</h1>
  </header>
  <main>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setBtn(1)"
      >
        Любимые фильмы
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setBtn(2)"
      >
        Найти фильмы
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div class="movies-watcheds">
        <h2 class="movies-title">
          Просмотренные
          <span class="movies-title_mod"
            >Количество: {{ movieStore.watchedMovies.length }}
          </span>
        </h2>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <h2 class="movies-title">
        Список фильмов
        <span class="movies-title_mod"
          >Количество: {{ movieStore.totalCountMovies }}
        </span>
      </h2>
      <Movie
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="search" v-else>
      <Search />
    </div>
  </main>
</template>
<script setup>
import Search from "./components/Search.vue";
import Movie from "./components/Movie.vue";
import { useMovieStore } from "./stores/MovieStore";

const setBtn = (id) => {
  movieStore.setActiveTab(id);
};

const movieStore = useMovieStore();
</script>
<style>
@import "./assets/scss/components/header.scss";
@import "./assets/scss/components/tabs.scss";
@import "./assets/scss/components/movies.scss";
@import "./assets/scss/components/search.scss";
</style>
