import Gifs from 'components/gifsSearched';
import './App.css';
import { Link } from 'wouter';
import Searcher from 'components/searcher';
import ReturnGif from 'hooks/returnGif';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

function AllGif(props) {
  const { params } = props;
  const { keyword } = params;
  const { gifs, loading, setPage } = ReturnGif(keyword);
  const Ref = useRef();
  const title = `Gifs of ${decodeURI(keyword)} | Gifly`;
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : Ref,
    once: false
  });
  useEffect(() => {
    if (isNearScreen) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isNearScreen, setPage]);  
  return(
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Link to='/' className='home-link'>Gifly</Link>
      <Searcher></Searcher>
      <h1>{decodeURI(keyword)}</h1>
      <div className='grid-content'>
      <Gifs gifs={gifs} loading={loading}></Gifs>
      </div>
      <div id="visor" ref={Ref}></div>
    </>
  )
}

export default AllGif;