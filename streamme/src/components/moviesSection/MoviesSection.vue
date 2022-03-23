<template>
  <div class="movies-section">
    <div class="section-title">{{title}}</div>
    <div class="movie-cards-container" :class="`${isSlider ? 'slider-viewport' : 'grid'}`">
     <div v-if="isSlider" :class="{'slider': isSlider}">
       <movie-card v-for="card in cards" :key="card.id"></movie-card>
     </div>
      <movie-card v-else v-for="card in cards" :key="card.id"></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/movieCards/MovieCard";
export default {
  name: "MoviesSection",
  components: {MovieCard},
  props: ['title', 'cards', 'isSlider'],
}
</script>
