import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopratedMovies = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
      getTopratedMovies();
    }, []);
  
  const getTopratedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopratedMovies(json.results));
  }
}

export default useTopratedMovies;