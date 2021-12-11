

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import Header from './components/Header';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Herosection';
import BackToTop from './components/Golbal/BackToTop';


function App(){
    return (
        <>
            <Header />
            <HeroSection />
            <Layout/>
            <BackToTop />
        </>
    )
}

export default App;