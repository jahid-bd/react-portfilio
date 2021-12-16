import { Col } from "react-bootstrap";

const PortfolioItem = (props) => {
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

export default PortfolioItem;