import React from 'react';
import './App.css';
import { Route } from "wouter";
import Home from './pages/Home';
import AllGif from './pages/searchResults';
import gifDetail from './pages/gifDetail';
import {GifContextProvider} from './context/gifContext';
import error404 from 'pages/404';

function App() {
  return(
    <GifContextProvider>
      <div className="App">
        <div className="App-header">
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating/:language" component={AllGif} />
          <Route path="/gif/:id" component={gifDetail} />
          <Route path="/404" component={error404} />
        </div>
      </div>
    </GifContextProvider>
  )
}

export default App;
