import React from "react";
import "../style/style.css"

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src="https://swerri.io/image/png/preloader.png" alt="Loading..." className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;
