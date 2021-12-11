import { Col, Container, Row } from "react-bootstrap"
import SectionHeader from "./Golbal/SectionHeading";

const ContentBox = (props) => {
    const icon = props.icon;
    const titleA = props.titleA;
    const titleB = props.titleB;

    return(
        <Col lg={4} md={6}>
          <div class="content-box">

            <div class="icon">
                <i class={icon}></i>
            </div>

            <div class="text">
              <h4> <a href=""> {titleA} </a> </h4>
              <p> {titleB} </p>
            </div>

          </div>
        </Col>
    )
}


const ServicesSection = () => {
    return(
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
    )
}

export default ServicesSection;