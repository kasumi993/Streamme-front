<template>
  <div class="search-menu">
    <div class="search-input-container">
      <input class="search-input" type="text" placeholder="Search..." @input="searchMovie($event)">
    </div>
    <div class="menu"  v-if="searchResults && searchResults.length !== 0">
      <div class="menu-items-container">
        <div class="menu-item" v-for="item in searchResults" :key="item.id" @click="goTo(item.id)">
          <img :src="posterPath(item.poster_path)">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesService from "@/services";

export default {
  name: "SearchMenu",
  data() {
    return {
      timeOut: null,
      searchResults: [],
    }
  },
  computed: {
  },
  methods: {
    goTo(id) {
      this.$router.push(`/detail/${id}`)
    },
    posterPath(image) {
      if (image) {
        return "https://image.tmdb.org/t/p/w500/" + image;
      }
      return '/img/cinema.jpg';
    },
    searchMovie(event) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        if(event.target.value != '') {
          this.fetchMovies(event.target.value.toLowerCase());
        } else {
          this.searchResults = [];
        }
      }, 1000);
    },
    fetchMovies(query) {
      MoviesService.searchMovies(query)
          .then((data) => {
            this.searchResults = data.slice(0, 5);
            console.log(this.searchResults);
          })
    }
  }
}
</script>