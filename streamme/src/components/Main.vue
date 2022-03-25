<template>
  <div class="main">
    <header-component></header-component>
    <main-movie-card></main-movie-card>
    <movies-section :title="'Top Picks For You'" :cards="suggestedMovies" :is-slider="true"></movies-section>
    <movies-section :title="'Continue Watching'" :cards="continueWatching" :is-slider="true"></movies-section>
    <movies-section :title="'See Also'" :cards="suggestedMovies" :is-slider="false"></movies-section>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/Header";
import MainMovieCard from "@/components/movieCards/mainMovieCard";
import MoviesSection from "@/components/moviesSection/MoviesSection";
import MoviesService from "@/services/index";

export default {
  name: 'MainComponent',
  components: {MoviesSection, MainMovieCard, HeaderComponent},
  data() {
    return {
      continueWatching: [
        {
          id: 1,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 2,
          name: 'batman',
          description: 'some description'
        },
      ],
      suggestedMovies: [
        {
          id: 1,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 2,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 3,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 4,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 5,
          name: 'batman',
          description: 'some description'
        },
        {
          id: 6,
          name: 'batman',
          description: 'some description'
        },
      ],
    }
  },
  mounted() {
    MoviesService.getMovies("/movie/popular")
    .then((data) => {
      console.log(data);
    })
  },
}
</script>