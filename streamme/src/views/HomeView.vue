<template>
  <div class="page-container">
    <sidebar-component :active="'home'" ></sidebar-component>
    <main-component></main-component>
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/Sidebar";
import MainComponent from "@/components/Main";

export default {
  name: 'HomeView',
  components: {
    MainComponent,
    SidebarComponent,
  }
}
</script>
