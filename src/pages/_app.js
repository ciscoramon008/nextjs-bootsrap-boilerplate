import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS + Bootstrap</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp