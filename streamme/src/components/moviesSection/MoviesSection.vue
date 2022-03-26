<template>
  <div class="movies-section">
    <div class="section-title">{{title}}</div>
    <div class="movie-cards-container" v-if="!loading && cards" :class="`${isSlider ? 'slider-viewport' : 'grid'}`">
     <div v-if="isSlider" :class="{'slider': isSlider}">
       <movie-card v-for="card in cards"
                   :key="card.id"
                   :movieCard="card"></movie-card>
     </div>
      <movie-card v-else v-for="card in cards"
                  :key="card.id"
                  :movieCard="card"></movie-card>
    </div>

    <div class="movie-cards-container" v-if="loading || !cards || cards.length === 0" :class="`${isSlider ? 'slider-viewport' : 'grid'}`">
      <div v-if="isSlider" :class="{'slider': isSlider}">
        <movie-card v-for="index in 6" :key="index"></movie-card>
      </div>
      <movie-card v-else v-for="index in 6" :key="index"></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/movieCards/MovieCard";
export default {
  name: "MoviesSection",
  components: {MovieCard},
  props: ['loading', 'title', 'cards', 'isSlider'],
}
</script>
