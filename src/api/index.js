import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

export const insertRating = newRatingObject =>
  api.post(`/rating`, newRatingObject);
/* export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`) */

const apis = {
  insertRating
  /* ,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById, */
};

export default apis;
