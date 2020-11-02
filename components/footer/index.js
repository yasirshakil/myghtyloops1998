import React from 'react'

const Footer = ()=>{
    return(
            <>
                <div className="container footer my-5">
                    <a href=''><img src="/icon1.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon3.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon4.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon2.webp" alt="Vercel Logo" className="logo" /></a>
                </div>
                <style jsx>{`
                    .footer{
                        display:flex;
                        flex-direction: row-reverse;
                    }
                    .footer .logo {
                        height:auto;
                        margin:0px 6px;
                        width:auto;
                    }
                `}</style>
            </>
    )
}

export default Footer;