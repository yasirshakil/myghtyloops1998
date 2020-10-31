import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import HomePage from '../pages/Home'
import NtfMoney from '../pages/nftMoney'

export default function Home() {
  return (
    <>
       <body>
          <NtfMoney/>
       </body>
        <style jsx>{`
          body{
            background-image: url('../bg.webp');
            background-size:cover;
            background-attachment: fixed;
          }
        `}</style>
    </>
  )
}
