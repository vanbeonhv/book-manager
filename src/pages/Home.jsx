import React from "react";
import Carosel from "../components/Carosel";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <Carosel />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Home;
