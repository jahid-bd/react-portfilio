// Vendors
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import "../../assets/vendor/icofont/icofont.min.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";

import Layout from '../Layout/Layout';
import { Container, Col, Row } from "react-bootstrap";


// Components
import SectionHeader from '../Golbal/SectionHeading';
import Progress from '../SkillSection/Progress';
import ResumeItem from '../ResumeSection/ResumeItem';
import ResumeHeader from '../ResumeSection/ResumeHeader';
import ContentBox from '../ServicesSection/ContentBox';
import TestimonalItem from '../TestimonalSection/TestimonalItem';
import DotBtn from '../TestimonalSection/DotBtn';
import CountBox from '../FactSection/CountBox';
import InputGroup from '../ContactSection/InputGroup';

// Images
import heroBg from '../../assets/img/hero-bg.jpg';
import jahid from '../../assets/img/jahid.jpg';
import PortfolioItem from '../PortfolioSection/PortfolioItem';

import img1 from '../../assets/img/portfolio/portfolio-1.jpg';
import img2 from '../../assets/img/portfolio/portfolio-2.jpg';
import img3 from '../../assets/img/portfolio/portfolio-3.jpg';
import img4 from '../../assets/img/portfolio/portfolio-4.jpg';
import img5 from '../../assets/img/portfolio/portfolio-5.jpg';
import img6 from '../../assets/img/portfolio/portfolio-6.jpg';
import img7 from '../../assets/img/portfolio/portfolio-7.jpg';
import img8 from '../../assets/img/portfolio/portfolio-8.jpg';
import img9 from '../../assets/img/portfolio/portfolio-9.jpg';

// import testimonPic1 from "../assets/img/testimonials/testimonials-1.jpg";
// import testimonPic2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonPic3 from "../../assets/img/testimonials/testimonials-3.jpg";
import testimonPic4 from "../../assets/img/testimonials/testimonials-4.jpg";
import testimonPic5 from "../../assets/img/testimonials/testimonials-5.jpg";

function Home(){
    return (
        <>
            <Layout>
                {/* Hero Section */}
                <section id='hero' className="d-flex flex-column align-items-center justify-content-center" style={{
                background: `url(${heroBg}) top center`,
                }}>
                <div className="hero-container">
                    <h1 id="home">Jahid Hasan</h1>
                    <p>I'm Web Developer 
                        <span className="typed"> </span>
                    </p>
                    </div>
                </section>

                {/* About Section */}
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

                {/*Skills Section  */}
                <section id="skills" className="skills">
                    <Container>
                        <SectionHeader heading='Skills' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'/>

                        <Row>
                            <Col lg={6}>
                                <Progress skill='HTML' value='100'/>
                                <Progress skill='CSS' value='90'/>
                                <Progress skill='Javascript' value='85'/>
                            </Col>

                            <Col lg={6}>
                                <Progress skill='REACT' value='80'/>
                                <Progress skill='NodeJs' value='75'/>
                                <Progress skill='Photoshop' value='55'/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
                {/* Resume Section */}
                <section id="resume" className="resume">
                    <Container>

                        <SectionHeader heading='Resume' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.' />
                    

                        <Row>
                        <Col lg={6}>
                                <ResumeHeader text='Sumary' />
                                <ResumeItem heading='Web Developement' session='2018 - Present'>
                                    <p>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable</p>
                                    <ul>
                                        <li>Portland par 127,Orlando, FL</li>
                                        <li>(123) 456-7891</li>
                                        <li>alice.barkley@example.com</li>
                                    </ul>
                                </ResumeItem>
                                

                                <ResumeHeader text='Education' />
                                <ResumeItem heading='MASTER OF FINE ARTS &amp; GRAPHIC DESIGN' session='2015 - 2016' title='Rochester Institute of Technology, Rochester, NY' >
                                    <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                                </ResumeItem>

                                <ResumeItem heading='Bachelor of Fine Arts &amp; Graphic Design' session='2010 - 2014' title='Rochester Institute of Technology, Rochester, NY' >
                                    <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                                </ResumeItem>
                            </Col>

                            <Col lg={6}>
                                <ResumeHeader text='Professional Experience' />
                                <ResumeItem heading='Senior graphic design specialist' session='2019 - Present' title='Experion, New York, NY' >
                                    <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                                    <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                                </ResumeItem>

                                <ResumeItem heading='GRAPHIC DESIGN SPECIALIST' session='2017 - 2018' title='Stepping Stone Advertising, New York, NY' >
                                    <ul>
                                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                    </ul>
                                </ResumeItem>
                            </Col>
                        </Row>
                    </Container>
                </section>

            {/* Portfolio Section */}
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
                        <PortfolioItem image= {img1} title='App 1' link="/portfolio-details" />
                        <PortfolioItem image= {img2} title='Web 3'/>
                        <PortfolioItem image= {img3} title='App 2'/>
                        <PortfolioItem image= {img4} title='Card 2'/>
                        <PortfolioItem image= {img5} title='Web 2'/>
                        <PortfolioItem image= {img6} title='App 3'/>
                        <PortfolioItem image= {img7} title='Card 1'/>
                        <PortfolioItem image= {img8} title='Card 3'/>
                        <PortfolioItem image= {img9} title='Web 3'/>
                    </Row>
                    </Container>
                </section>

                {/* Services Section */}
                <section id="services" class="services">
                    <Container>

                        <SectionHeader heading='Services' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'/>

                    <Row class=".content">

                        <ContentBox icon='icofont-computer cz-color-16777215' titleA='Magni Dolores' titleB='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>

                        <ContentBox icon='icofont-chart-bar-graph' titleA='Monroe Rolfson' titleB='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>

                        <ContentBox icon='icofont-earth cz-color-16777215' titleA='Remington Muller' titleB='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>

                        <ContentBox icon='icofont-image cz-color-16777215' titleA='Remington Muller' titleB='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>

                        <ContentBox icon='icofont-settings cz-color-16777215' titleA='Nemo Enim' titleB='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'/>

                        <ContentBox icon='icofont-tasks-alt cz-color-16777215' titleA='Eiusmod Tempor' titleB='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'/>

                    </Row>

                    </Container>
                </section>

                {/* Testimonal Section */}
                <section id="testimonials" className="testimonials">
                    <Container>
                        
                        <SectionHeader heading='Testimonials' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.' />

                    
                    <div className="owl-carousel owl-theme testimonials-carousel" style={{
                        display: 'flex',

                    }}>

                        <TestimonalItem quote=' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.' profilePic={testimonPic3} name='Jena Karlis' profession='Store Owner' />
                        
                        <TestimonalItem quote=' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.' profilePic={testimonPic4} name='Matt Brandon' profession='Freelancer' />

                        <TestimonalItem quote='Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.' profilePic={testimonPic5} name='John Larson' profession='Entrepreneur' />

                        {/* <TestimonalItem quote='Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.' profilePic={testimonPic1} name='Sara Wilsson' profession='Designer' />
                        
                        <TestimonalItem quote=' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.' profilePic={testimonPic2} name='Sara Wilsson' profession='Ceo &amp; Founder' /> */}
                
                        </div>

                        <div style={{
                        textAlign: 'center',
                        }} >
                        <DotBtn active='active' />
                        <DotBtn />
                        <DotBtn />
                        </div>
                    </Container>
                </section>

                {/*Fact Section */}
                <section id="fact" className="fact">
                    <Container>
                        <SectionHeader heading='Facts' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'/>

                        <Row>
                            <Col lg={3} md={6}>
                                <CountBox icon= 'icofont-simple-smile' count='232' titleA='Happy Clints' titleB='consequuntur quae' />
                            </Col>

                            <Col lg={3} md={6}>
                                <CountBox icon= 'icofont-document-folder' count='521' titleA='Projects' titleB='adipisci atque cum quia aut' />
                            </Col>

                            <Col lg={3} md={6}>
                                <CountBox icon= 'icofont-live-support' count='1,463' titleA='Hours Of Support' titleB='aut commodi quaerat' />
                            </Col>

                            <Col lg={3} md={6}>
                                <CountBox icon= 'icofont-users-alt-5' count='15' titleA='Hard Workers' titleB='rerum asperiores dolor' />
                            </Col>
                        </Row>
                    </Container>
                </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <Container>
                    <SectionHeader heading='Contact' title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'/>
                </Container>

                    <Row>
                    <Col lg={5} className="d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                            <i className="icofont-google-map"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                        <div className="email">
                            <i className="icofont-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="icofont-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{
                            border : '0',
                            width: '100%',
                            height: '290px',
                        }} allowfullscreen="" > </iframe>
                        </div>

                    </Col>

                    <Col lg={7} className="mt-5 mt-lg-0 d-flex align-items-stretch">

                        <form className="php-email-form">
                        <Row className="form-row">
                            <Col md={6} className='py-3'>
                                <InputGroup label='Your Name' type='text' id='name'/>
                            </Col>
                            <Col md={6} className='py-3'>
                                <InputGroup label='Your Email' type='email' id='email'/>
                            </Col>
                        </Row>

                        <InputGroup label='Subject' type='text' id='subject' />

                        <div className="form-group py-3" >
                            <label for="name">Message</label>
                            <textarea className="form-control" name="message" rows="10"></textarea>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </Col>

                    </Row>
                </section>

            </Layout>
        </>
    )
}

export default Home;