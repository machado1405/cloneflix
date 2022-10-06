import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";

import "./App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  // const [topMovies, setTopMovies] = React.useState([]);

  // React.useEffect(() => {
  //   async function getTopRatedMovies(url) {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     console.log(data);
  //   }
  //   const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
  //   getTopRatedMovies(topRatedUrl);
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
