class MovieService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'http://www.omdbapi.com/';
  }

  async search(title, type, page) {
    try {
      const response = await fetch(`${this.apiUrl}?apikey=${this.apiKey}&s=${title}&type=${type}&page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from OMDB API:', error);
      return { Response: 'False', Error: 'Error fetching data from OMDB API' };
    }
  }

  async getMovie(movieId) {
    try {
      const response = await fetch(`${this.apiUrl}?apikey=${this.apiKey}&i=${movieId}&plot=full`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details from OMDB API:', error);
      return { Response: 'False', Error: 'Error fetching movie details from OMDB API' };
    }
  }
}

export default MovieService;
