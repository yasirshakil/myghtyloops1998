import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const ntfMoney = ()=>{

    return(
        <div className="mb-5">
            <Navbar/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center Section1">
                            <span>2/5</span>
                            <div className="diamondGif">
                                <img src="/diamond.gif" alt="diamond"/>
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
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                                <span className="innerFrameTxt">4/10</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                            <span className="innerFrameTxt">2/10</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                            <span className="innerFrameTxt">9/10</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 Pading">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                            <span className="innerFrameTxt">2/5</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                                <span className="innerFrameTxt">2/5</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                                <span className="innerFrameTxt">2/5</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 py-4">
                            <div className="framBox">
                                <span className="innerFrameTxt">2/5</span>
                                <img className="framImg"  src="/frame.webp"/>
                                <img className="bCoin" src="bCoin.webp"/>
                                <button className="farmeBtns">1 LP</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            <style jsx>{`
                .Section1 span{
                    font-family: emoji;
                    font-size: 20px;
                    opacity: 0.7;
                    font-weight: 600;
                }

                .diamondGif img {
                    height:120px;
                    width:120px
                }

                .Section1 div button{
                    border:none;
                    padding: 5px 12px;
                    border-radius: 50px;
                    background:#000;
                    color:#fff;
                    font-family: 'Montserrat', sans-serif;
                    font-weight:500;
                    font-size: 20px;
                    position:relative;
                    z-index:1;
                    overflow:hidden;
                    transition:ease 0.2s;
                }
                .Section1 div button:after{
                   content:"N";
                   position:absolute;
                   font-size:42px;
                   font-family: emoji;
                   top:-25%;
                   left:30%;
                   color:gray;
                   opacity: 0.5;
                   z-index:-1;
                   transition:ease 0.2s;
                }

                .Section1 div button:hover{
                    background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(229deg, #ff4f4f 0%, rgba(29, 44, 243, 0) 100%), #FF4F4F;
                }

                .Section1 div button:hover:after{
                    top:100px;
                }

                .framBox{
                    position:relative;
                }

                .framBox .framImg {
                    width:100%;
                    
                }

                .framBox .bCoin{
                    position: absolute;
                    top:20%;
                    left:12%;
                }
                .framBox .innerFrameTxt{
                    position: absolute;
                    top:10%;
                    left:42%;
                    font-family: emoji;
                    font-size: 20px;
                    opacity: 0.7;
                    font-weight: 600;
                }

                .framBox .farmeBtns{
                    position: absolute;
                    bottom:-5%;
                    left:36%;
                    border:none;
                    padding: 5px 12px;
                    border-radius: 50px;
                    background:#000;
                    color:#fff;
                    font-family: 'Montserrat', sans-serif;
                    font-weight:500;
                    font-size: 20px;
                    z-index:1;
                    overflow:hidden;
                    transition:ease 0.2s;
                }

                .Pading{
                    padding:0 100px 0 100px;
                }

                .framBox .farmeBtns:hover{
                    background: repeat padding-box border-box 0% 0%/auto auto scroll linear-gradient(229deg, #ff4f4f 0%, rgba(29, 44, 243, 0) 100%), #FF4F4F;
                }

                @media only screen and (max-width: 767.5px) and (min-width: 240px)  {
                    .Pading{
                        padding:0 20px 0 20px;
                    }

                    .framBox .bCoin{
                        height:70%;
                    }

                    .framBox .farmeBtns{
                        bottom:-2%;
                        left:40%;
                    }

                    
                }
            `}</style>
        </div>
    )

}

export default ntfMoney;
