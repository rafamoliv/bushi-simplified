import React from "react";
import Carousel from "~/components/carousel";
import Navbar from "~/components/navbar";

function Landing() {
  return (
    <div className="containerLanding">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default Landing;
