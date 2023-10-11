import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        topRatedMovies : null,
        popularMovies : null,
        upComingMovies : null,
        trailerVideo : null,
    },
    
    reducers:{
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopratedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },

    }
})

export const  {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopratedMovies, addUpComingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;