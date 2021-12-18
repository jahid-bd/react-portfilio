import { Link } from "@reach/router";
import { Col } from "react-bootstrap";

const PortfolioItem = ({image, title, link}) => {
    return(
    <Col lg={4} md={6} className="portfolio-item filter-app">
        <div className="portfolio-wrap">

          <img src= {image} className="img-fluid" alt=""/>

          <div className="portfolio-links">
            <a href={image} className="venobox" title={title}><i className="bx bx-plus"></i></a>
            <a title="More Details"> <Link to='/portfolio-details'>  <i className="bx bx-link"> </i> </Link> </a>
          </div>

        </div>
    </Col>
    )
}

export default PortfolioItem;