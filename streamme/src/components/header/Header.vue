<template>
  <div class="header">
    <div class="header-options">
      <span>Movies</span>
      <span>Series</span>
      <span>Animes</span>
    </div>
    <span class="hello-user">Welcome Back, Khady!</span>
    <search-menu></search-menu>
  </div>
</template>

<script>
import SearchMenu from "@/components/searchMenu/SearchMenu";
export default {
  name: "HeaderComponent",
  components: {SearchMenu},
}
</script>
