import Header from "./header";
import MovieCard from "./movie-card";
import MovieList from "./movie-list";
import { useState } from "react";
import { Routes, Route } from "react-router";
import RaceTo from "./race-to";

export default function Home(){

 


  return(

    <div>
        <Header />
        
        

        <MovieList />
       
    </div>
  )
}