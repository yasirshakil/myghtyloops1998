import React from 'react';
import Navbar from '../../uiComponents/navbar'
import Footer from '../../uiComponents/footer'
import Home from '..';

const HomePage = ()=> {
    return (
        <div>
            <Navbar/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 homeSection">
                            <img src="/logo-denitivo.webp" alt="Vercel Logo" className="logo" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 homeSection">
                            <img src="/recto-2.webp" alt="Vercel Logo" className="logo" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                            <h6><i>Creating value trough NFTs</i></h6>
                            <button className="buyNumis">Buy Numis</button>
                            <button className="whitePaper">White Paper</button>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />
                            <div>
                                <button className="btnSection"></button>
                            </div>   
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />  
                             
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />   
                        </div>
                    </div>
                </div>
            <Footer/>
            <style jsx>{`
                .homeSection{
                    display:felx;
                    justify-content: center;
                    align-items: center;
                }

                .homeSection img {
                    width:auto;
                    height:auto;
                }

                .ntfs h6 {
                    font-weight:600;
                    font-style: italic;npm
                }

                .buyNumis{
                    height:40px;
                    width:140px;
                    margin:40px 20px 0 20px;
                    border :solid 1px #000;
                    background: transparent;
                    transition:0.5s ease ;
                }
                .buyNumis:hover{
                    height:40px;
                    width:140px;
                    margin:40px 20px 0 20px;
                    border :solid 1px #000;
                    background: #000;
                    opacity:0.6;
                    color:#fff;

                }

                .whitePaper{
                    height:40px;
                    width:140px;
                    margin:40px 20px 0 20px;
                    border:none;
                    background: #000;
                    opacity:0.6;
                    transition:0.5s ease ;
                    color:#fff;

                }
                .whitePaper:hover{
                    opacity:1; 
                }

                .coin{
                    height:auto;
                    width:auto;
                }

                .coinCardBox{
                    height:400px;
                    // background:red;
                }

                .btnSection{
                    height:auto;
                    wifth:100%;
                    // background:blue;
                }
            `}</style>
        </div>
    )
}

export default HomePage;