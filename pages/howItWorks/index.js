import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const HowItWorks = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-12">
            <img src="coin.gif" width="108" height="108" alt="img" />
            <h1 className="title mt-5">
              <span>¿</span>How to get NFT Money<span>?</span>
            </h1>
          </div>
        </div>
        <div className="row mt-5 p-100">
          <div className="col-md-4 box1 px-1">
            <div className="box">
              <h3 className="mb-4">
                <i>Hold Numis</i>
              </h3>
              <p className="">
                Numi is the native token of <br />
                NFT finance and is the key <br /> for buying NFT Money
              </p>
            </div>
          </div>
          <div className="col-md-4 px-1">
            <div className="box">
              <h3 className="mb-4 text-center">
                <i>Get Lp tokens</i>
              </h3>
              <p className="text-center">
                Provide liquidity on the Numi/Ethereum Lp{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4 px-1">
            <div className="box">
              <h3 className="text-center">
                <i>Buy NFT Money</i>
              </h3>
              <p className="text-center">
                Congratuilations, now you can <br /> trade, stake & much more!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="title mt-5 text-center">
              <span>¿</span>How does NFT Finance create value<span>?</span>
            </h1>
          </div>
        </div>
        <div className="row p-120">
          <div className="col-md-6 align-center mt-5">
            <div className="iconBox">
              <img src="/iconbox1.webp" alt="iconbox" />
            </div>

            <h6 className="f-23">
              <span>Combining Defi with NFTs</span>
            </h6>
          </div>
          <div className="col-md-6 align-center mt-5">
            <div className="iconBox">
              <img src="/iconbox2.webp" alt="iconbox" />
            </div>

            <h6 className="f-23 icon-desc">
              <span>
                Locking down value & <br /> providing liquidity
              </span>
            </h6>
          </div>
        </div>
        <div className="row p-120">
          <div className="col-md-6 align-center mt-5">
            <img src="/iconbox3.webp" alt="iconbox" />

            <h6 className="f-23 icon-desc">
              <span>
                Creating NFTs with collateral <br /> value that increases over
                time
              </span>
            </h6>
          </div>
          <div className="col-md-6 align-center mt-5">
            <img src="/iconbox4.webp" alt="iconbox" />

            <h6 className="f-23 t-left">
              <span>Creating sustainable staking rewards</span>
            </h6>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
       `}</style>
    </div>
  );
};

export default HowItWorks;
