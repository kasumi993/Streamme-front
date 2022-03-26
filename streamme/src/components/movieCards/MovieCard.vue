<template>
  <div class="movie-card">
    <div class="img-container">
      <img v-if="movieCard" :src="posterPath" @click="toDetails()">
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ['movieCard'],
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movieCard.poster_path;
    }
  },
  methods: {
    toDetails() {
      this.$router.push(`/detail/${this.movieCard.id}`);
    }
  },
}
</script>
