import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Collection = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0 coinSlider">
            <div className="sliderCoins">
            <img className="arrows_right" src="arrows_right.png" />
            <img className="arrows_left" src="arrows_left.png" />
              <span id="left">
                {/* <img className="arrows_white" src="left.png" /> */}
              </span>
              <span id="right"></span>
              <div className="coins">
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
                <img src="coin1.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 RewardSection my-5">
            <div className="RewardBox">
              <img src="/frame.webp" />
              <div className="reward">
                <span className="amount1">Ammount: XX</span>
                <span className="amount2">Rewards: XX</span>
              </div>
              <button className="farmeBtns">Stake</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
