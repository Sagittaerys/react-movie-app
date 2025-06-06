import Header from "./header";
import MovieCard from "./movie-card";
import MovieList from "./movie-list";
import { useState } from "react";
import { Routes, Route } from "react-router";
import RaceTo from "./race-to";


export default function App(){

 


  return(

    <div>
      
      <Header />
        <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<RaceTo />} />
      </Routes>
    </div>
  )
}