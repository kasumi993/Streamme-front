<template>
  <div class="cast-section">
    <div class="section-title" v-if="cast && cast.length !== 0">Cast</div>
    <div class="cast-cards-container grid" v-if="!loading && cast && cast.length !== 0">
      <div class="cast-card" v-for="card in cast" :key="card.id">
        <div class="img-container">
          <div class="overlay" @click="searchActor(card.name)">
            <div class="actor-title">{{card.name}}</div>
          </div>
          <img v-if="card.profile_path" :src="profilePath(card.profile_path)">
          <img v-else src="/img/avatar2.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "castSection",
  props: ['cast', 'loading'],
  methods: {
    profilePath(profilePath) {
      return "https://image.tmdb.org/t/p/w500/" + profilePath;
    },
    searchActor(name) {
      window.open(`https://www.google.com/search?q=${name}`,'_blank')
    },
  }
}
</script>

<style scoped>

</style>