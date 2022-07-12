import React from 'react';
import './App.css';
import { Link } from "wouter";
import Searcher from 'components/searcher';
import Gifs from 'components/gifsSearched';
import TrendingGifs from 'components/trendingGifs/trendingGifs';
import ReturnGif from 'hooks/returnGif';
import { Helmet } from 'react-helmet';


function Home() {
    const { gifs, loading} = ReturnGif(localStorage.getItem('lastSearch'));
    return(
      <>
        <Helmet>
          <title>Gifly</title>
        </Helmet>
        <>
          <Link to='/' className='home-link'>Gifly</Link>
          <Searcher></Searcher>
          <h2>Last search</h2>
          <p>{decodeURI(localStorage.getItem('lastSearch'))}</p>
          <div className='grid-content'>
          <Gifs gifs={gifs} loading={loading}></Gifs>
          </div>
          <TrendingGifs></TrendingGifs>
        </>
      </>
    )
  }

  export default Home;