import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () =>{
    return (
      <div>
        <div className="container Navbar">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-12 iconSec">
              <img src="/icon1.webp" alt="Vercel Logo" className="logo" />
              <img src="/icon2.webp" alt="Vercel Logo" className="logo" />
              <img src="/icon3.webp" alt="Vercel Logo" className="logo" />
              <img src="/icon4.webp" alt="Vercel Logo" className="logo" />
              <img src="/icon6.webp" alt="Vercel Logo" className="logo" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 navLinksSec">
              <Link href="/"><a>Home</a></Link>
              <Link href="../howItWorks"><a>How dose it work</a></Link>
              <Link href="../Money"><a>NFT Money</a></Link>
              <a href="">My collection</a>
              <a href="/">Opensea</a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 iconSec">
              <button className="navbtn">Connect wallet</button>
            </div>
          </div>
        </div>  
        <style jsx>{`
                *{
                  font-family: 'Montserrat', sans-serif;
                }

              a{
                text-decoration: none;
              }

           .Navbar .iconSec{
              height:auto;
              background: transparent;
              display:flex;
              justify-content:center;
              align-items:center;
            }

            .Navbar .navLinksSec{
              height:auto;
              padding:20px 0px;
              background: transparent;
              display:flex;
              justify-content:center;
              align-items:center;
            }

            .Navbar .navLinksSec a {
              margin:0px 15px;
              pading:8px;
              font-weight:500;
              font-size:12px;
              color:#000000;
              position: relative;
            }

            .Navbar .navLinksSec a:after{
              position: absolute;
              content:'';
              height:1px;
              width:100%;
              background :#000;
              top:-5px;
              left:0;
            }

            .Navbar .navLinksSec a:hover:after{
                height:4px;
            }

            .Navbar .iconSec .logo{
                margin:0px 5px;
            }
            .navbtn{
              height: 34px;
              padding: 0px 30px;
              font-size: 13px;
              border: solid rgba(50, 50, 50, 1) 2px;
              cursor: pointer;
              background: transparent;
              border-radius:50px;
              // padding:0px 25px;
              transition:all 0.5s ease;
            }
            .navbtn:focus{
              outline:none;
            }

            .navbtn:hover{
              color:#fff;
              background:#000;
            }
        `}</style>
      </div>
    )
  }

  export default Navbar