import "../styles/styles.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import HomePage from '../pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
       <body>
          <HomePage/>
       </body>
        {/* <style jsx>{`
          body{
            
          }
        `}</style> */}
    </>
  )
}
