import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';

import {
  KinopoiskDev,
  MovieQueryBuilder,
} from '@openmoviedb/kinopoiskdev_client';

const kp = new KinopoiskDev('A2PNGAA-FMJMFB1-JZGVH27-NX8TVX4');

export const useSearchMovies = defineStore('searchMovies', () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const queryBuilder = new MovieQueryBuilder();
    const query = queryBuilder
      .query(search)
      .paginate(1, 10)
      .build();
    const { data, error, message } = await kp.movie.getBySearchQuery(query);

    if (data) {
      const { docs } = data;
      console.log(docs);
    }
    if (error) console.log(error, message);


    movies.value = data.docs;
    loader.value = false;
  }

  const addToUserMovies = (obj) => {
    const movieStore = useMovieStore();

    movieStore.movies.push({ ...obj, isWatched: false });
    movieStore.activeTab = 1;
  }

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  }
});
