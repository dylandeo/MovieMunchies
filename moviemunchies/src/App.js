import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LikesPage from './components/LikesPage';
import WatchLaterPage from './components/WatchLaterPage';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';

import { Route, Routes  } from "react-router-dom";


function App() {

  

  return (
  <>
  <NavBar />
    <div className="_container"> 
      <Routes>
        <Route path="/" element={<SearchPage />}/>
        <Route path="/likes" element={<LikesPage />}/>
        <Route path="/watch-later" element={<WatchLaterPage />}/>
      </Routes>
    </div>

    
  </>
  )
}

export default App;
