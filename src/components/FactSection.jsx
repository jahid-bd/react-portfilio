import { Container, Col, Row } from "react-bootstrap";
import SectionHeader from "./Golbal/SectionHeading";

const CountBox = (props) => {
    const icon = props.icon;
    const count = props.count;
    const titleA = props.titleA;
    const titleB = props.titleB;
    return(
        <div className="count-box">
            <div className="count">
                <i className={icon}></i>
                <span>{count}</span>
            </div>
            <p> <strong>{titleA}</strong> {titleB}</p>
        </div>
    )
}

const FactSection = props => {
    return (
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
    )
}

export default FactSection;