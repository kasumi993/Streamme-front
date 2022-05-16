<template>
  <div class="page-container">
    <sidebar-component :active="'coming'" ></sidebar-component>
    <coming-component></coming-component>
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/Sidebar";
import ComingComponent from "@/components/comingSoon/coming";

export default {
  name: 'ComingView',
  components: {
    ComingComponent,
    SidebarComponent,
  }
}
</script>
