import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const searchRequest = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Jack+Reacher`)
  return response.json();
}

export const getMovieById = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
  return response.json();
}

export const getVideosByMovieId = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/vdeos?api_key=${API_KEY}&language=en-US`)
  return response.json();
}

export const getPopularMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}