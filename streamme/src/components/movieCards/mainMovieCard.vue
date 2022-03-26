<template>
 <div class="main-movie-card">
   <div class="video-container">
     <iframe
         v-if="mainMovie"
         :src="getLink"
         allowfullscreen>
     </iframe>
   </div>
 </div>
</template>

<script>
export default {
  name: "mainMovieCard",
  props: ['mainMovie'],
  computed: {
    getLink() {
      if(this.mainMovie && this.mainMovie.length !== 0 && this.mainMovie.site) {
        if(this.mainMovie.site.toLowerCase() === 'youtube') {
          return `https://www.youtube.com/embed/${this.mainMovie.key}?autoplay=1&keyboard=1&rel=0&autohide=1&cc_load_policy=1&modestbranding=1&fs=0&mute=1&loop=1&controls=0&showinfo=0&playlist=${this.mainMovie.key}`;
        }
      }
      return false;
    },
  },
  methods: {
  },
}
</script>