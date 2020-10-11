<template>
  <div>
    <h1>Edit Movie</h1>
    <form @submit.prevent="updateMovie">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="movie.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Release year:</label>
              <input type="text" class="form-control" v-model="movie.year">
            </div>
          </div>
        </div>
         <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Your rating:</label>
              <input type="text" class="form-control" v-model="movie.rating">
            </div>
          </div>
        </div>
         <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" v-model="movie.description"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          movie: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/movies/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.movie = response.data;
        });
      },
      methods: {
        updateMovie() {
          let uri = `http://localhost:4000/movies/update/${this.$route.params.id}`;
          this.axios.post(uri, this.movie).then(() => {
            this.$router.push({name: 'movies'});
          });
        }
      }
    }
</script>