import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Money = () => {
  return (
    <>
      <body className="bg">
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center Section1">
              <span>2/5</span>
              <div className="diamondGif">
                <img src="/diamond.gif" alt="diamond" />
              </div>
              <div>
                <button>5 LP</button>
              </div>
            </div>
          </div>
          <div className="row Pading">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">7/10</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">4/10</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">2/10</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">9/10</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
          </div>
          <div className="row mb-5 Pading">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">2/5</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">2/5</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">2/5</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
              <div className="framBox">
                <span className="innerFrameTxt">2/5</span>
                <img className="framImg" src="/frame.webp" />
                <img className="bCoin" src="bCoin.webp" />
                <button className="farmeBtns">1 LP</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
      <style jsx>{`
        .bg {
          background-image: url("../../bg.webp");
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Money;
