import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import HomePage from '../pages/Home'
import HowItWorks from '../pages/howItWorks'

export default function Home() {
  return (
    <>
       <body>
          <HomePage/>
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
