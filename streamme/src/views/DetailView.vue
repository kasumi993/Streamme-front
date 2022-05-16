<template>
  <div class="page-container">
    <sidebar-component :active="prevRoute"></sidebar-component>
    <movie-details></movie-details>
  </div>
</template>
<script>
import MovieDetails from "@/components/movieDetails/movieDetails";
import SidebarComponent from "@/components/sidebar/Sidebar";
export default {
  name: 'DetailView',
  components: {SidebarComponent, MovieDetails},
  data() {
    return {
      prevRoute: null,
    }
  },
  mounted() {
    this.prevRoute = this.$router.options.history.state.back.substr(1,this.$router.options.history.state.back.length);
  }
}
</script>