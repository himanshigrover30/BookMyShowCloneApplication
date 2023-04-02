import React from "react";
import Navbar from "../Components/Navbar/Navbar.Component";
const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovieLayoutHoc;
