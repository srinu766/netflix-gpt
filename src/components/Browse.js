import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpComingMovies()

  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> :
         <> 
         <MainContainer/>
         <SecondaryContainer/>
         </>
      }
      
    </div>
  )
}

export default Browse
