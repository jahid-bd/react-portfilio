import { Link } from "@reach/router"
import { Container } from "react-bootstrap"
import Layout from "../Layout/Layout"


import portImg1 from "../../assets/img/portfolio-details-1.jpg";
import portImg2 from "../../assets/img/portfolio-details-2.jpg";
import portImg3 from "../../assets/img/portfolio-details-3.jpg";

const PortfolioDetails = () => {
    return(
        <Layout>
            <section id="breadcrumbs" className="breadcrumbs">
                <Container>
                    <div className="content d-md-flex align-items-center justify-content-between">
                        <h2>Portfolio Details</h2>
                        <ul>
                            <li><a > <Link to="/">Home</Link> </a></li>
                            <li>/</li>
                            <li>Portfolio Details</li>
                        </ul>
                    </div>
                </Container>
            </section>

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="portfolio-details-container">

                        <div className="owl-carousel owl-theme portfolio-details-carousel">
                            <div className="item"><img src={portImg1} alt="" /></div>
                            <div className="item"><img src={portImg2} alt="" /></div>
                            <div className="item"><img src={portImg3} alt="" /></div>
                        </div>

                        <div className="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                            <li><strong>Category</strong>: Web design</li>
                            <li><strong>Client</strong>: ASU Company</li>
                            <li><strong>Project date</strong>: 01 March, 2020</li>
                            <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="portfolio-description">
                        <h2>This is an example of portfolio detail</h2>
                        <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PortfolioDetails;