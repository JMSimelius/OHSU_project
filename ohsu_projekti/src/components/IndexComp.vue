<template>
  <div>
      <h1>Movies</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Add a movie</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Rating</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies" :key="movie._id">
                  <td>{{ movie.title }}</td>
                  <td>{{ movie.year }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: movie._id }}" class="btn btn-primary">Edit</router-link></td>
                 <td><button class="btn btn-danger" @click.prevent="deleteMovie(movie._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          movies: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/movies';
      //let uri = 'http://localhost:8080/movies';
      this.axios.get(uri).then(response => {
        this.movies = response.data;
      });
    },
    methods: {
      deleteMovie(id)
      {
        let uri = `http://localhost:4000/movies/delete/${id}`;
        //let uri = `http://localhost:8080/movies/delete/${id}`;
        // eslint-disable-next-line no-unused-vars
        this.axios.delete(uri).then(response => {
          this.movies.splice(this.movies.indexOf(id), 1);
        });
      }
    }
  }
</script>