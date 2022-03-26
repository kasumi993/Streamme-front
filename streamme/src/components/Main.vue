<template>
  <div class="main">
    <header-component></header-component>
    <main-movie-card :mainMovie="mainMovie"></main-movie-card>
    <movies-section :loading="loading" :title="'Top Picks For You'" :cards="suggestedMovies" :is-slider="true"></movies-section>
    <movies-section :loading="loading" :title="'Continue Watching'" :cards="continueWatching" :is-slider="true"></movies-section>
    <movies-section :loading="loading" :title="'See Also'" :cards="suggestedMovies" :is-slider="false"></movies-section>
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
      loading: false,
      continueWatching: [],
      suggestedMovies: [],
      mainMovie: [],
    }
  },
  beforeMount() {
    this.getInitialMovies();
  },
  mounted() {
    this.$nextTick(() => {
      this.infiniteScroll();
    })
  },
  methods: {
    getMainMovie(id) {
      MoviesService.getMovieInfo(`/movie/${id}/videos?language=en-US`)
          .then((data) => {
            this.mainMovie = data[0];
            console.log(data[0]);
          })
    },
    getInitialMovies() {
      MoviesService.getMovies("/movie/popular")
          .then((data) => {
            this.suggestedMovies = data;
            const movie = this.suggestedMovies[Math.floor(Math.random() * 20)];
            this.getMainMovie(movie.id);
          })
    },
    infiniteScroll() {
      const main = document.querySelector(".main");
      if(main) {
        main.onscroll = () => {
          let bottomOfWindow = (main.offsetHeight + main.scrollTop) >= main.scrollHeight;
          if (bottomOfWindow) {
            MoviesService.getMovies("/movie/popular")
                .then(data => {
                  this.suggestedMovies.push(data);
                });
          }
        }
      }
    }
  }
}
</script>