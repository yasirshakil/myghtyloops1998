import React from 'react'

const Footer = ()=>{
    return(
            <>
                <div className="container footer">
                    <a href=""><img src="/icon6.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon4.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon3.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon2.webp" alt="Vercel Logo" className="logo" /></a>
                    <a href=''><img src="/icon1.webp" alt="Vercel Logo" className="logo" /></a>
                </div>
                <style jsx>{`
                    .footer{
                        display:flex;
                        flex-direction: row-reverse;
                    }
                    .footer .logo {
                        height:32px;
                        margin:0px 6px;
                        width:32px;
                    }
                `}</style>
            </>
    )
}

export default Footer;