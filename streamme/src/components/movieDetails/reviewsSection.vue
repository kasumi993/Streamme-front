<template>
  <div class="reviews-section">
    <div class="section-title">Reviews</div>

      <div class="tabs-container">
        <ul class="tabs">
          <li class="tab-title" @click="tabIndex=0" :class="{'active': tabIndex===0}">
            Votes
          </li>
          <li class="tab-title" @click="tabIndex=1" :class="{'active': tabIndex===1}">
            Comments
          </li>
        </ul>
        <div class="tab-content" v-if="tabIndex===0">
          contenu 0
        </div>
        <div class="tab-content" v-if="tabIndex===1">
          <div class="comments-container" v-if="reviews && reviews.length !==0">
            <comments-card v-for="comment in reviews" :key="comment.id" :comment="comment"></comments-card>
          </div>
          <div class="no-comments"  v-if="!reviews || reviews.length ===0">
            <img src="/img/noresult.svg">
            Ouupssyy, we don't have any comments for this one
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CommentsCard from "@/components/movieDetails/commentsCard";
export default {
  name: "reviewsSection",
  props: ["reviews"],
  components: {CommentsCard},
  data() {
    return {
      tabIndex: 0,
    }
  },
  mounted() {
    console.log(this.reviews);
  }
}
</script>