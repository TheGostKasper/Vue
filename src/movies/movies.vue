<template>
<div class="container">
    <h2>If you lean into the music or movies it will kiss your cheek </h2>
    
    <!-- <div class="movies" v-for="poster in posters" :key="poster">
        <img :src="poster">
    </div> -->
    
    
    <div class="row">
        <movie-item @remove="removeMovie(i)" v-for="(movie,i) in movies" :key="movie.id" :movie="movie">
        </movie-item>
    </div>
</div>
</template>

<script>
import MovieItem from "./movieItem.vue";

export default {
  data() {
    return {
      movies: [],
      posters: [],
      getSrcs(arr) {
        let psts = [];
        for (let index = 0; index < arr.length; index++) {
          const element = arr[index];
          const regex1 = RegExp('src="([^">]+)"', "g");
          psts.push(
            element
              .match(regex1)[0]
              .replace('src="', "")
              .replace('"', "")
          );
        }
        return psts;
      },
      getPosters() {
        $.get("https://yts.am/browse-movies?page=2").done(res => {
          let regex1 = RegExp('<img[^>]+src="([^">]+)"', "g");
          let results = this.getSrcs(res.match(regex1));
          this.posters = results;
        });
      }
    };
  },
  name: "movie-list",
  components: {
    "movie-item": MovieItem
  },
  methods: {
    removeMovie(i) {
      this.movies.splice(i, 1);
    }
  },
  created: function() {
    // this.getPosters();
    $.getJSON("./../src/data/movies.json").done(res => {
      this.movies = res;
    });
  }
};
</script>

<style scoped>
.posters {
  width: 300px;
}
.list-item {
  display: inline-flex;
}
</style>

