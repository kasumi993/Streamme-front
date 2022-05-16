<template>
  <div class="main">
    <header-component></header-component>
    <div class="coming-title">Reserve your seats right now and enjoy the best movies</div>
    <main-movie-card :mainMovie="mainMovie"></main-movie-card>
    <movies-section :loading="loading" :title="'For next Week'" :cards="suggestedMovies" :is-slider="true"></movies-section>
    <movies-section :loading="loading" :title="'Coming next Month'" :cards="suggestedMovies" :is-slider="false"></movies-section>
    <content-loader v-show="loading"></content-loader>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/Header";
import MainMovieCard from "@/components/movieCards/mainMovieCard";
import MoviesSection from "@/components/moviesSection/MoviesSection";
import MoviesService from "@/services/index";
import ContentLoader from "@/components/loader";

export default {
  name: 'comingComponent',
  components: {ContentLoader, MoviesSection, MainMovieCard, HeaderComponent},
  data() {
    return {
      loading: false,
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
    getInitialMovies() {
      MoviesService.getMovies("/movie/popular")
          .then((data) => {
            this.suggestedMovies = data;
            const movie = this.suggestedMovies[Math.floor(Math.random() * 20)];
            this.mainMovie = movie;
          })
    },
    infiniteScroll() {
      const main = document.querySelector(".main");
      if(main) {
        main.onscroll = () => {
          let bottomOfWindow = (main.offsetHeight + main.scrollTop + 100) >= main.scrollHeight;
          if (bottomOfWindow) {
            this.loading = true;
            MoviesService.getMovies("/movie/popular")
                .then(data => {
                  data.map((item) => {this.suggestedMovies.push(item)});
                  setTimeout(() => {
                    this.loading = false;
                  }, 300)
                });
          }
        }
      }
    }
  }
}
</script>