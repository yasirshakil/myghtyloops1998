import React from 'react';
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Home from '..';

const HomePage = ()=> {
    return (
        <div className="pb-5">
            <Navbar/>
                <div className="container py-5">
                    <div className="row bg">
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
                            <h6 className="mt-4 card-text">Click here to get LP tokens</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" />  
                            <div className="btnSection">
                                <button className="">NFT Money</button>
                                <img src="/shadow.png"/>

                            </div> 
                            <h6 className="mt-4 card-text">Get your limited NFT Money</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 m-auto coinCardBox">
                            <img src="/coin.webp" alt="Vercel Logo" className="coin" /> 
                            <div className="btnSection">
                                <button className="">Stake</button>
                                <img src="/shadow.png"/>
                            </div>  
                            <h6 className="mt-4 card-text">Stake NFT Money & get rewards</h6>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default HomePage;
