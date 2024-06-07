class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  movieTime() {
    return this.data - 5 * this.users >= 10;
  }
  
}

const library = new Network(50,9);
console.log(library.movieTime());