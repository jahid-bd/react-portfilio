import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "./Golbal/SectionHeading";

const Progress = props => {
    const skill = props.skill;
    const value = props.value;
    return(
        <div className="progress">
            <span className="skill"> {skill} <i className="var">{value}%</i> </span>
            <div className={`progress-bar-wrap value-${value}`}>
            </div>
        </div>
    )
}

const SkillSection = () => {
    return(
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
    )
}

export default SkillSection;