import '../styles/style.css'
import '../styles/magnific-popup.min.css'
import '../styles/resp.css'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/all.min.css"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SideMenu from '../components/sideMenu';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
  },[])

  return(  <section className="page-wrapper">
                <Navbar />
                <main className="content-page">
                   <Component {...pageProps} />
                    <SideMenu />
                </main>
                <Footer />
           </section>)
}

export default MyApp
