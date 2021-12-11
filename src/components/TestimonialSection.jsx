import { Container } from "react-bootstrap"
import SectionHeader from "./Golbal/SectionHeading";

import testimonPic1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonPic2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonPic3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonPic4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonPic5 from "../assets/img/testimonials/testimonials-5.jpg";

const activeBtn = {
    backgroundColor: '#149ddd',
}

const DotBtn = (props) => {
  const active = props.active;
  return (
    <a href style={{
      cursor: 'pointer',
      margin: '0 5px',
      display: 'inline-flex',
      width: '12px',
      height: '12px',
      background: '#d6d6d6',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      ...active,
    }}>
    </a>
  )
}

const TestimonalItem = props => {
    const quote = props.quote;
    const profilePic = props.profilePic;
    const name = props.name;
    const profession = props.profession;
    return(
        <div className="item">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <div style={{
                    textAlign: 'center',
                }}><img src= {profilePic} className='testimonial-img' alt=""/></div>
                <h3>{name}</h3>
                <h4>{profession}</h4>
              </div>
            </div>
    )
}

const TestimonalSection = () => {
    return(
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
              <DotBtn active={activeBtn} />
              <DotBtn />
              <DotBtn />
            </div>
        </Container>
      </section>
    )
}

export default TestimonalSection;