<template>
<div class="card col-xs-10 col-sm-4 col-md-3 col-lg-3 poster">
  <img class="card-img-top" :src="movie.posterurl" @click="alerty">
  <div class="card-block">
    <span class="card-title">{{movie.title}} {{movie.imdbRating}}/10</span>
    <!-- <p class="card-text">{{movie.storyline}}</p> -->
    <a href="#" class="btn" @click="requestRemoval">...</a>
  </div>
</div>
</template>

<script>
export default {
  name: "movie-item",
  props: ["movie"],
  methods: {
    requestRemoval() {
      this.$emit("remove");
    },
    alerty() {
      alert("funny");
    }
  }
};
</script>
<style scoped>
.poster{
    padding: 20px;
}
.card-img-top{
        height: 450px;
}
</style>