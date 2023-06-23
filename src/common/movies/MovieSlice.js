import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
    selectedMovie: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        addMovieDetails: (state, {payload}) => {
            state.selectedMovie = payload;
        }
    }
})

export const { addMovies, addMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = state => state.movies.movies;
export const getMovieDetails = state => state.movies.selectedMovie;