import Gifs from 'components/gifsSearched';
import './App.css';
import { Link } from 'wouter';
import Searcher from 'components/searcher';
import ReturnGif from 'hooks/useGetGifs';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import throttle from 'just-throttle';
import Spinner from 'components/spinner/spinner';

function AllGif({ params }) {
  const { keyword, rating, language } = params;
  const { gifs, setPage, loading } = ReturnGif(keyword, rating, language);
  const Ref = useRef();
  const title = `Gifs of ${decodeURI(keyword)} | Gifly`;
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : Ref,
    once: false
  });
  
  const handleThrottleNextPage = useCallback(throttle(() => setPage(prevPage => prevPage + 1), 500),[setPage])
  
  useEffect(() => {
    if (isNearScreen) handleThrottleNextPage();
  }, [isNearScreen, handleThrottleNextPage]);  
  
  return(
    <>
      {
        loading ? <Spinner />
        : <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Link to='/' className='home-link'>Gifly</Link>
          <Searcher></Searcher>
          <h1>{decodeURI(keyword)}</h1>
          <div className='grid-content'>
            <Gifs gifs={gifs} />
          </div>
          <div id="visor" ref={Ref}></div>
        </>
      }
    </>
  )
}

export default AllGif;