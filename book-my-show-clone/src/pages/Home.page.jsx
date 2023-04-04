import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios"; //for importing API's

// Components
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCardComponent";

// HOC
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  // Recommended Movies
  useEffect(() => {
    const requestTopRateMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "/movie/top_rated?api_key=79907188cb5ae75d06a2638662657afa"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRateMovies();
  }, []);

  // premier movies
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        "/movie/popular?api_key=79907188cb5ae75d06a2638662657afa"
      );
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  // onlinestreamEvents
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "/movie/upcoming?api_key=79907188cb5ae75d06a2638662657afa"
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" alt="RuPay" className="" />
          </div>
          <PosterSlider
            // these are called props which we need to pass
            title="Premiers"
            subtitle="Brand new Releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          // these are called props which we need to pass
          title="Online Stream Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};
export default DefaultLayoutHoc(HomePage);
