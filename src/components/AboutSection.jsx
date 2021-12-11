import SectionHeader from "./Golbal/SectionHeading"
import { Container,Col, Row } from "react-bootstrap"
import jahid from '../assets/img/jahid.jpg'
const AboutSection = () =>{
    return(
        <section id='about' className="about">
            <Container>
                <SectionHeader heading='About' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas' />

                <Row>
                    <Col lg={4}>
                        <img src= {jahid} alt="" style={{
                            width: '311px',
                            height: '311px'
                        }}/>
                    </Col>

                    <Col lg={8} className="content">

                        <h2>{`Web Designer & Web Devloper`}</h2>
                        <p className="font-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                       <Row>
                            <Col lg={6}>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i> <strong>Birthday: </strong> 9 April 2001</li>
                                    <li><i className="fa fa-angle-right"></i> <strong>Website: </strong> <a href="-">www.example.com</a></li>
                                    <li><i className="fa fa-angle-right"></i> <strong>Phone: </strong> +880 1754 310 604</li>
                                    <li><i className="fa fa-angle-right"></i> <strong>City: </strong> Rajshahi, Bangladesh</li>
                                </ul>
                            </Col>

                            <Col lg={6}>
                                <ul>
                                    <li><i className="fa fa-angle-right"></i> <strong>Age: </strong> 20</li>
                                    <li><i className="fa fa-angle-right"></i> <strong>Degree: </strong> BA</li>
                                    <li><i className="fa fa-angle-right"></i> <strong>Email: </strong> jahdbd9x@gmail.com</li>
                                    <li><i className="fa fa-angle-right"></i> <strong>Freelance: </strong> Available</li>
                                </ul>
                            </Col>
                        </Row>

                        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    </Col>
                    </Row>
                </Container>
        </section>
    )
}

export default AboutSection;