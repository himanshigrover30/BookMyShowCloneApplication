import React from "react";
import { useState } from "react";

// Components
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import EntertainmentCardComponent from "../Components/Entertainment/EntertainmentCardComponent";

// HOC
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Recommended Movies"
          subject="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"
              alt="RuPay"
              className=""
            />
          </div>
          <PosterSlider
            // these are called props which we need to pass
            title="Premiers"
            subject="Brand new Releases every Friday"
            posters={premierMovies}
            isDark={false}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          // these are called props which we need to pass
          title="Online Stream Events"
          subject="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};
export default DefaultLayoutHoc(HomePage);
