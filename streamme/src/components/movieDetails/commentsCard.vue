<template>
  <div class="comment-card">
    <img class="avatar" :src="profilePath ? profilePath : '/img/avatar2.png'">
    <div class="comment-content">
      <div class="author-name">{{ comment.author_details.username }}</div>
      <div class="comment-meta">Commented on {{ formatDate }}</div>
      <div class="comment">"{{ comment.content }}"</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentsCard",
  props: ["comment"],
  computed: {
    formatDate() {
      const date = new Date(this.comment.created_at);
      return date.toDateString();
    },
    profilePath() {
      if(this.comment.author_details.avatar_path) {
        if(this.comment.author_details.avatar_path.includes('/https')) {
          return this.comment.author_details.avatar_path.substring(1, this.comment.author_details.avatar_path.length -1);
        }
        return  "https://image.tmdb.org/t/p/w500" + this.comment.author_details.avatar_path;
      }
      return null;
    },
  }
}
</script>
