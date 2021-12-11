import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "./Golbal/SectionHeading"

const InputGroup = props => {
    const label = props.label;
    const type = props.type;
    const id = props.id
    return(
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={id} className="form-control" id={id} />
      </div>
    )
} 


const ContactSection = () => {
    return(
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
    )
}

export default ContactSection;