<template>
  <div class="main detail">
    <header-component></header-component>
    <main-movie-card :mainMovie="movieDetails"></main-movie-card>
    <div class="text detail-synopsis">
      <div class="flex-column-container">
        <div class="text detail-title">Synopsis</div>
        {{ movieDetails.overview }}
      </div>
      <div class="flex-column-container">
        <ul>
          <li><b>Genres:</b> <span v-for="genre in movieDetails.genres" :key="genre.id"> | {{genre.name}}</span></li>
          <li><b>Release Date:</b> {{ movieDetails.release_date }}</li>
          <li>
            <b>Votes:</b>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
            </svg>
            {{ movieDetails.vote_average }}% / {{ movieDetails.vote_count }} votes</li>
          <li><b>Comments:</b> 0 comments</li>
        </ul>
      </div>
    </div>
    <div class="text detail-title">Watch With</div>
    <div class="providers-container">

    </div>
    <div class="movies-section">
      <div class="section-title">Cast</div>
      <div class="movie-cards-container" v-if="!loading && movieDetails.credits.cast">
        <div class="movie-card" v-for="card in movieDetails.credits.cast" :key="card.id">
          <div class="img-container">
            <img v-if="card" :src="profilePath(card.profile_path)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesService from "@/services";
import HeaderComponent from "@/components/header/Header";
import MainMovieCard from "@/components/movieCards/mainMovieCard";

export default {
  name: "movieDetails",
  components: {MainMovieCard, HeaderComponent},
  data() {
    return {
      movieDetails: [],
      loading: false,
      cast: [],
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.getMovieDetails(this.$route.params.id);
    }
  },
  methods: {
    getMovieDetails(id) {
      MoviesService.getMovieInfo(`/movie/${id}?append_to_response=credits,images,similar`)
          .then((data) => {
            this.movieDetails = data;
            console.log(data);
          })
    },
    profilePath(profile) {
      return "https://image.tmdb.org/t/p/w500/" + profile;
    }
  },
}
</script>

<style scoped>

</style>