<template>
  <div>
    <h1>Add a movie</h1>
    <form @submit.prevent="addMovie">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Movie Title:</label>
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
            <label>Rating:</label>
            <input type="text" class="form-control" v-model="movie.rating">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" v-model="movie.description" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add a movie to list</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          movie:{}
        }
    },
    methods: {
      addMovie(){
        console.log(this.movie);
      }
    }
  }
</script> 
<!--
<script>
    export default {
        data(){
        return {
          movie:{}
        }
    },
    methods: {
      addMovie(){
    let uri = 'http://localhost:4000/movies/add';
    this.axios.post(uri, this.movie).then(() => {
       this.$router.push({name: 'movies'});
    });
}
    }
  }
</script> -->