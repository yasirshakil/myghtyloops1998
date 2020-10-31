import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 navLinksSec">
      <Link href="/">
        <a className="active-active">Home</a>
      </Link>
      <Link href="../howItWorks">
        <a>How dose it work</a>
      </Link>
      <Link href="../Money">
        <a>NFT Money</a>
      </Link>
      <Link href="../Collection">
        <a>My collection</a>
      </Link>
      <a href="/">Opensea</a>
      <style jsx>{`
        .navLinksSec {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .navLinksSec a {
          padding: 0 20px 0 20px;
          color: #fff;
          border-bottom: solid 1px #fff;
          background: rgba(0, 0, 0, 0.8);
        }
        @media only screen and (min-width: 768px) {
          .navLinksSec {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenu;
