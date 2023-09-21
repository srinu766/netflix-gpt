import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()

    // fetch trailer video && updating the store triler video data
      const  getBgMoviesVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+
        movieId +
        '/videos?language=en-US', API_OPTIONS);
        const json = await data.json()
        // console.log(json.results)
    
        const filterData = json.results.filter((video)=>video.type=="Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0] ;
        // console.log(trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer))
      }
      useEffect(()=>{
        getBgMoviesVideos();
      },[])
}

export default useMovieTrailer
