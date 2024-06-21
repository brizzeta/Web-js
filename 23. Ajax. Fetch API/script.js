// http://www.omdbapi.com/?i=tt3896198&apikey=87e1e615

import MovieService from './movieService.js';

const apiKey = '87e1e615';

const movieService = new MovieService(apiKey);

$(document).ready(function() {
  const searchForm = $('#search-form');
  const searchInput = $('#search-input');
  const typeSelect = $('#type-select');
  const moviesList = $('#movies-list');
  const pagination = $('#pagination');
  const movieDetails = $('#movie-details');
  const loadingIcon = $('.loading-icon');
  const moreButton = $('#more-button');
  let currentPage = 1;
  let currentSearchTerm = '';
  let currentSearchType = '';

  searchForm.submit(async function(event) {
    event.preventDefault();
    currentPage = 1;
    currentSearchTerm = searchInput.val();
    currentSearchType = typeSelect.val();
    moviesList.empty();
    pagination.empty();
    loadingIcon.show();
    await searchAndDisplayMovies(currentSearchTerm, currentSearchType, currentPage);
    loadingIcon.hide();
  });

  moviesList.on('click', '.btn-details', async function() {
    const imdbID = $(this).data('id');
    movieDetails.empty().append(loadingIcon);
    loadingIcon.show();
    const movieDetailsData = await movieService.getMovie(imdbID);
    displayMovieDetails(movieDetailsData);
    loadingIcon.hide();
  });

  pagination.on('click', '.btn-page', async function() {
    currentPage = $(this).data('page');
    moviesList.empty();
    loadingIcon.show();
    await searchAndDisplayMovies(currentSearchTerm, currentSearchType, currentPage);
    loadingIcon.hide();
  });

  moreButton.on('click', async function() {
    $(this).prop('disabled', true).text('Loading...');
    currentPage++;
    loadingIcon.show();
    await searchAndDisplayMovies(currentSearchTerm, currentSearchType, currentPage, true);
    loadingIcon.hide();
    $(this).prop('disabled', false).text('More');
  });

  async function searchAndDisplayMovies(title, type, page, append = false) {
    const searchData = await movieService.search(title, type, page);
    moviesList.empty();
    if (searchData.Response === 'True') {
      displayMovies(searchData.Search, append);
      if (searchData.totalResults > 10) {
        displayPagination(searchData.totalResults, page);
      }
    } else {
      moviesList.html('<p>Movie not found!</p>');
    }
  }

  function displayMovies(movies, append = false) {
    movies.forEach(movie => {
      const movieItem = $(`<div class="movie-item">
                              <h3>${movie.Title}</h3>
                              <p>Type: ${movie.Type}</p>
                              <p>Year: ${movie.Year}</p>
                              <button class="btn-details" data-id="${movie.imdbID}">Details</button>
                            </div>`);
      moviesList.append(movieItem);
    });
  }

  function displayPagination(totalResults, currentPage) {
    const totalPages = Math.ceil(totalResults / 10);
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = $(`<button class="btn-page" data-page="${i}">${i}</button>`);
      if (i === currentPage) {
        pageButton.addClass('active');
      }
      pagination.append(pageButton);
    }
  }

  function displayMovieDetails(movie) {
    const detailsContainer = $(`<div class="movie-details">
                                  <h2>${movie.Title}</h2>
                                  <p>Year: ${movie.Year}</p>
                                  <p>Director: ${movie.Director}</p>
                                  <p>Actors: ${movie.Actors}</p>
                                  <p>Plot: ${movie.Plot}</p>
                                  <p>IMDB Rating: ${movie.imdbRating}</p>
                                </div>`);
    movieDetails.append(detailsContainer);
  }
});
