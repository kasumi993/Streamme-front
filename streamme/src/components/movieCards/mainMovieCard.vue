<template>
 <div class="main-movie-card" :class="{'small': $route.name === 'detail'}">
   <div class="video-container">
     <div class="overlay"
          v-if="mainMovie && mainMovie.length !== 0"
          @click="$router.push(`/detail/${this.mainMovie.id}`)">
        <div class="movie-title">{{mainMovie.title}}</div>
        <div class="book-btn" v-if="$route.name == 'coming'">Book Now</div>
        <div class="overview">{{mainMovie.overview}}</div>
     </div>
     <iframe
         v-if="getLink"
         :src="getLink"
         allowfullscreen>
     </iframe>
   </div>
 </div>
</template>

<script>
import MoviesService from "@/services";

export default {
  name: "mainMovieCard",
  props: ['mainMovie'],
  watch: {
    mainMovie() {
      if(this.mainMovie && this.mainMovie.length !== 0) {
        this.getMainMovie(this.mainMovie.id);
      }
    }
  },
  data() {
    return {
      movieVideo: [],
    }
  },
  mounted() {
    if(this.mainMovie && this.mainMovie.length !== 0) {
      this.getMainMovie(this.mainMovie.id);
    }
  },
  computed: {
    getLink() {
      if(this.movieVideo && this.movieVideo.length !== 0 && this.movieVideo.site) {
        if(this.movieVideo.site.toLowerCase() === 'youtube') {
          return `https://www.youtube.com/embed/${this.movieVideo.key}?autoplay=1&keyboard=1&rel=0&autohide=1&cc_load_policy=1&modestbranding=1&fs=0&mute=1&loop=1&controls=0&showinfo=0&playlist=${this.movieVideo.key}`;
        }
      }
      return false;
    },
  },
  methods: {
    getMainMovie(id) {
      MoviesService.getMovieInfo(`/movie/${id}/videos?language=en-US`)
          .then((data) => {
            this.movieVideo = data.results[0];
          })
    },
  },
}
</script>