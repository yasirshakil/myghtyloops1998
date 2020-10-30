import React from 'react';
import Navbar from '../../uiComponents/navbar'
import Footer from '../../uiComponents/footer'
import Home from '..';

const HomePage = ()=> {
    return (
        <div className="pb-5">
            <Navbar/>
                <div className="container bg py-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 homeSection">
                            <img src="/logo-denitivo.webp" alt="Vercel Logo" className="logo" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 homeSection">
                            <img src="/recto-2.webp" alt="Vercel Logo" className="logo" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center mb-5">
                            <h6><i>Creating value trough NFTs</i></h6>
                            <button className="buyNumis">Buy Numis</button>
                            <button className="whitePaper">White Paper</button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />
                            <div className="btnSection">
                                <button className="">LP UNI-V2</button>
                                <img src="/shadow.png"/>
                            </div>   
                            <h6 className="mt-4">Click here to get LP tokens</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />  
                            <div className="btnSection">
                                <button className="">NFT Money</button>
                                <img src="/shadow.png"/>

                            </div> 
                            <h6 className="mt-4">Get your limited NFT Money</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" /> 
                            <div className="btnSection">
                                <button className="">Stake</button>
                                <img src="/shadow.png"/>
                            </div>  
                            <h6 className="mt-4">Stake NFT Money & get rewards</h6>
                        </div>
                    </div>
                </div>
            <Footer/>
            <style jsx>{`
                .bg{
                    background:	rgba(255,255,255,0.5);
                }

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
                    widht:auto;
                    height:auto;
                    
                }

                .coinCardBox{
                    height:auto;
                    // background:red;
                    text-align:center;
                }

                .btnSection{
                    height:auto;
                    wifth:100%;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    margin:20px 0 0 0;
                    font-size:20px;
                    position:relative;
                }
                .btnSection button{
                    border:none;
                    width:170px;
                    background-color: rgba(28, 28, 28, 1);
                    color:#fff;
                    font-size:22px;
                    transition:0.5s ease ;

                }
                .btnSection button:hover{          
                    color:#89EABD;
                }

                .btnSection img {
                    position: absolute;
                    top: 34px;
                    width: 200px;
                    height: 26px;
                    left: 28px;
                }
                @media only screen and (max-width: 767.5px) and (min-width: 240px)  {
                    .coin{
                        widht:auto;
                        height:auto;
                    }

                    .btnSection button{
                        
                    }
                    .btnSection img {
                        position: absolute;
                        top: 34px;
                        width: 200px;
                        height: 26px;
                        left: 75px;
                    }

                    .homeSection img {
                        width:300px;
                        height:auto;
                    }
                }
            `}</style>
        </div>
    )
}

export default HomePage;
