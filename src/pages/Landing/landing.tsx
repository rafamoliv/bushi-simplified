import React from "react";
import Carousel from "~/components/carousel";
import Footer from "~/components/footer";
import Group from "~/components/group";
import Navbar from "~/components/navbar";
import Table from "~/components/table";

import "./style.scss";

export default function Landing() {
  // set scroll to position 0, fix bug openning others scrolls positions
  window.scrollTo(0, 0);

  return (
    <div className="containerLanding">
      <Navbar />
      <Carousel />
      <div className="bodyLanding">
        <Group />
        <Table />
      </div>
      <Footer />
    </div>
  );
}
