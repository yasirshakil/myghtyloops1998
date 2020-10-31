import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Collection = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 coinSlider"></div>
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
      <style jsx>{`
        .coinSlider {
          height: 200px;
          background: rgba(0, 0, 0, 0.5);
        }

        .RewardSection {
          display: flex;
          justify-content: center;
        }

        .RewardSection .RewardBox {
          position: relative;
          top: 0;
          height: auto;
          width: auto;
          display: flex;
          justify-content: center;
        }

        .RewardSection .RewardBox .reward {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .RewardSection .RewardBox .reward .amount1 {
          height: 50%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          padding: 30px 0 0 0;
          border-bottom: solid 1px #21252921;
        }

        .RewardSection .RewardBox .reward .amount2 {
          height: 50%;
          width: 100%;
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0 30px 0;
        }

        .farmeBtns {
          position: absolute;
          bottom: -4%;
          left: 26%;
          border: none;
          padding: 2px 25px;
          border-radius: 50px;
          background: #000;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 20px;
          z-index: 1;
          overflow: hidden;
          transition: ease 0.2s;
        }

        .farmeBtns:hover {
          background: repeat padding-box border-box 0% 0% / auto auto scroll
              linear-gradient(229deg, #ff4f4f 0%, rgba(29, 44, 243, 0) 100%),
            #ff4f4f;
        }
      `}</style>
    </div>
  );
};

export default Collection;
