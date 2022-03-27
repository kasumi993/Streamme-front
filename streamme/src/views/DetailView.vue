<template>
  <div class="page-container">
    <sidebar-component :active="'home'" ></sidebar-component>
    <movie-details></movie-details>
  </div>
</template>
<script>
import MovieDetails from "@/components/movieDetails/movieDetails";
import SidebarComponent from "@/components/sidebar/Sidebar";
export default {
  name: 'DetailView',
  components: {SidebarComponent, MovieDetails},
}
</script>