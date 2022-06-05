<template>
  <div class="page-container">
    <sidebar-component :active="'contact'" ></sidebar-component>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebar/Sidebar";
import ContactUs from "@/components/contactUs";

export default {
  name: 'ContactView',
  components: {
    ContactUs,
    SidebarComponent,
  }
}
</script>
