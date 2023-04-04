import "./App.css";
// import .env from "dotenv";

// Routers
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
// import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie:id" element={<MoviePage />} />
        <Route path="/plays" element={<PlayPage />} />
      </Routes>
    </div>
  );
}

export default App;
