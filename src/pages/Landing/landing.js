import React from "react";
import Carousel from "~/components/carousel";
import Group from "~/components/group";
import Navbar from "~/components/navbar";

function Landing() {
  return (
    <div className="containerLanding">
      <Navbar />
      <Carousel />
      <Group />
    </div>
  );
}

export default Landing;
