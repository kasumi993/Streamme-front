<template>
  <div class="detail">
    <sidebar-component :active="'home'" ></sidebar-component>
    <movie-details></movie-details>
    <search-sidebar></search-sidebar>
  </div>
</template>
<script>
import MovieDetails from "@/components/movieDetails/movieDetails";
import SidebarComponent from "@/components/sidebar/Sidebar";
import SearchSidebar from "@/components/searchSidebar/SearchSidebar";
export default {
  components: {SearchSidebar, SidebarComponent, MovieDetails}
}
</script>