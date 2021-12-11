import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "./Golbal/SectionHeading";

import img1 from '../assets/img/portfolio/portfolio-1.jpg'
import img2 from '../assets/img/portfolio/portfolio-2.jpg'
import img3 from '../assets/img/portfolio/portfolio-3.jpg'
import img4 from '../assets/img/portfolio/portfolio-4.jpg'
import img5 from '../assets/img/portfolio/portfolio-5.jpg'
import img6 from '../assets/img/portfolio/portfolio-6.jpg'
import img7 from '../assets/img/portfolio/portfolio-7.jpg'
import img8 from '../assets/img/portfolio/portfolio-8.jpg'
import img9 from '../assets/img/portfolio/portfolio-9.jpg'

const PortflioItem = (props) => {
    const image = props.image;
    const title = props.title;
    return(
        <Col lg={4} md={6} className="portfolio-item filter-app">
        <div className="portfolio-wrap">

          <img src= {image} className="img-fluid" alt=""/>

          <div className="portfolio-links">
            <a href={image} className="venobox" title={title}><i className="bx bx-plus"></i></a>
            <a title="More Details"> <i className="bx bx-link"></i></a>
          </div>

        </div>
      </Col>
    )
}

const PortfolioSection = () => {
    return(
        <section id="portfolio" className="portfolio">
        
        <Container>

            <SectionHeader heading='Portfolio'/>

           <Row>
               <Col lg={12} className='d-flex justify-content-center'>
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </Col>
            </Row>

        <Row className="portfolio-container">
            <PortflioItem image= {img1} title='App 1'/>
            <PortflioItem image= {img2} title='Web 3'/>
            <PortflioItem image= {img3} title='App 2'/>
            <PortflioItem image= {img4} title='Card 2'/>
            <PortflioItem image= {img5} title='Web 2'/>
            <PortflioItem image= {img6} title='App 3'/>
            <PortflioItem image= {img7} title='Card 1'/>
            <PortflioItem image= {img8} title='Card 3'/>
            <PortflioItem image= {img9} title='Web 3'/>
        </Row>
        </Container>
    </section>
    )
}

export default PortfolioSection;