import heroBg from '../assets/img/hero-bg.jpg';

const HeroSection = () => {
    return(
        <section id='hero' className="d-flex flex-column align-items-center justify-content-center" style={{
            background: `url(${heroBg}) top center`,
        }}>
        <div className="hero-container">
            <h1 id="home">Jahid Hasan</h1>
            <p>I'm Web Developer <span className="typed"> 
       </span></p>
        </div>
    </section>
    )
}

export default HeroSection;