<template>
  <div>
      <h1>Movies</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Add a movie</router-link>
          </div>
        </div><br />
        
        <table id="myTable2" class="table table-hover">
            <thead>
            <tr>
              <th onclick="sortTable(0)">Title</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Buttons</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies" :key="movie._id">
                  <td>{{ movie.title }}</td>
                  <td>{{ movie.year }}</td>
                  <td>{{ movie.rating }}</td>
                  <td>{{ movie.description }}</td>
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
    },
    functions: {
      sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
    }
  }
  
</script>