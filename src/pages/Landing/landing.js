import React from "react";
import Carousel from "~/components/carousel";
import Group from "~/components/group";
import Navbar from "~/components/navbar";
import Table from "~/components/table";

import "./style.scss";

function Landing() {
  return (
    <div className="containerLanding">
      <Navbar />
      <Carousel />

      <div className="bodyLanding">
        <Group />
        <Table />
      </div>
    </div>
  );
}

export default Landing;
