import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './container/Home'
import Explore from './container/Explore'
import Playlist from './container/Playlist'
import WatchLater from './container/WatchLater'
import ProductListing from './container/ProductListing'
import SingleVideo from './container/SingleVideo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:categoryName' element={<ProductListing />} />
        <Route path='/video/:_id' element={<SingleVideo />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/watch-later' element={<WatchLater />} />
      </Routes>
    </>
  );
}

export default App;
