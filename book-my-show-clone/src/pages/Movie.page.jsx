import React from "react";
import MovieLayoutHoc from "../layout/Movie.layout";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import MovieHero from "../Components/MovieHero/MovieHero.Component";

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // get cast
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movies/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  // similar movies
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movies/${id}/similar   `);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  // Recommended Movies
  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  // Exclusive movies
  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(`/movie/${id}`);
      setMovie(getMovieDate.data);
    };
    requestMovie();
  }, [id]);

  const settingsCart = {};

  const settings = {};

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl ">
            {" About The movies"}
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:w-3/4">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stram Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <PosterSlider
          config={settings}
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <PosterSlider
          config={settings}
          title="BMS XCLUSIVE Movies"
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
};
export default MovieLayoutHoc(MoviePage);
