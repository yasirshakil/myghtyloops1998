import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'




 const HowItWorks = ()=>{
    return(
        <div>
            <Navbar/>
                <div className="container">
                    <h1> hellow World</h1>
                </div>
            <Footer/>
        <style jsx>{`
         h1{
             color:red;
         }
        `}</style>
        </div>

    )
}

export default HowItWorks;
