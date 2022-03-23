<template>
  <div class="home">
    <sidebar-component :active="'home'" ></sidebar-component>
    <main-component></main-component>
    <search-sidebar></search-sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarComponent from "@/components/sidebar/Sidebar";
import MainComponent from "@/components/Main";
import SearchSidebar from "@/components/searchSidebar/SearchSidebar";

export default {
  name: 'HomeView',
  components: {
    SearchSidebar,
    MainComponent,
    SidebarComponent,
  }
}
</script>
